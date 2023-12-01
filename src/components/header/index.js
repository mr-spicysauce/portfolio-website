import { useEffect, useState } from 'react'
import { ContentConstraint } from '../constraints/content'
import styles from './header.module.css'
import mainHeroStyles from 'src/components/heros/main.module.css'

export const Header = ({ heroRef }) => {
    const [headerFilled, setHeaderFilled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const main1Viability =
                1 - window.scrollY / (heroRef?.current?.offsetHeight - 45)
            if (window.scrollY >= heroRef?.current?.offsetHeight - 45) {
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
                    <a className={styles.headerTitle} href="#">
                        Jack G
                    </a>
                    <div className={styles.headerLinks}>
                        <a id="HeaderButtons" href="#skills">
                            Skills
                        </a>
                        <a id="HeaderButtons" href="#portfolio">
                            Portfolio
                        </a>
                        <a id="HeaderButtons" href="#about">
                            About
                        </a>
                        <a id="HeaderButtons" href="#contact">
                            Contact
                        </a>
                    </div>
                    <a id="HeaderSpacer"></a>
                </div>
            </ContentConstraint>
        </header>
    )
}
