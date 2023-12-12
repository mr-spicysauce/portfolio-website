import { useEffect, useState } from 'react'
import { ContentConstraint } from '../constraints/content'
import styles from './header.module.css'
import Link from 'next/link'
import mainHeroStyles from 'src/components/heros/main.module.css'
import HamburgerMenu from 'src/assets/SVG/HamburgerMenu'
import CloseIcon from 'src/assets/SVG/CloseIcon'

const HeaderLinks = ({ links }) => (
    <div className={styles.headerLinks}>
        {(links || []).map((link) => (
            <a key={link.href} className="HeaderButton" href={link.href}>
                {link.name}
            </a>
        ))}
    </div>
)

export const Header = ({ heroRef, scrollRef, links }) => {
    const [headerFilled, setHeaderFilled] = useState(false)
    const [headerMenuOpen, setHeaderMenuOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const main1Bounds = scrollRef
                ? scrollRef.current?.getBoundingClientRect()
                : { y: heroRef?.current?.offsetHeight }
            const main1Viability = 1 - window.scrollY / (main1Bounds?.y - 45)
            if (window.scrollY >= main1Bounds?.y - 90) {
                setHeaderFilled(true)
            } else {
                setHeaderFilled(false)
            }

            if (heroRef?.current && main1Viability >= 0) {
                heroRef.current.style.opacity = main1Viability
            }
        })

        window.addEventListener('hashchange', () => {
            setHeaderMenuOpen(false)
        })
    }, [])

    return (
        <header
            className={`${headerFilled ? styles.active : styles.inactive} ${
                styles.header
            } ${headerMenuOpen ? styles.headerMenuOpen : ''}`}
        >
            <ContentConstraint className={styles.headerContent}>
                <div className={styles.headerInner}>
                    <Link className={styles.headerTitle} href="/">
                        {process.env.NEXT_PUBLIC_WEBSITE_NAME || 'Jack'}
                    </Link>
                    <HeaderLinks links={links} />
                    <a id="HeaderSpacer"></a>
                    <a
                        className={styles.hamburgerMenuLink}
                        onClick={() => setHeaderMenuOpen(!headerMenuOpen)}
                    >
                        {headerMenuOpen ? <CloseIcon /> : <HamburgerMenu />}
                    </a>
                </div>

                <div className={styles.hamburgerMenu}>
                    <HeaderLinks links={links} />
                </div>
            </ContentConstraint>
        </header>
    )
}
