import { useEffect, useState } from 'react'
import { ContentConstraint } from '../constraints/content'
import styles from './header.module.css'
import Link from 'next/link'
import mainHeroStyles from 'src/components/heros/main.module.css'
import HamburgerMenu from 'src/assets/SVG/HamburgerMenu'

export const Header = ({ heroRef, scrollRef, links }) => {
    const [headerFilled, setHeaderFilled] = useState(false)

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
    }, [])

    return (
        <header
            className={`${headerFilled ? styles.active : styles.inactive} ${
                styles.header
            }`}
        >
            <ContentConstraint>
                <div className={styles.headerInner}>
                    <Link className={styles.headerTitle} href="/">
                        {process.env.NEXT_PUBLIC_WEBSITE_NAME || 'Jack'}
                    </Link>
                    <div className={styles.headerLinks}>
                        {(links || []).map((link) => (
                            <a
                                key={link.href}
                                className="HeaderButton"
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <a id="HeaderSpacer"></a>
                    <a href="#">
                        <HamburgerMenu />
                    </a>
                </div>
            </ContentConstraint>
        </header>
    )
}
