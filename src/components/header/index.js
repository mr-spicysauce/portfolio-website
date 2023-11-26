import { useEffect, useState } from 'react'
import { ContentConstraint } from '../constraints/content'
import styles from './header.module.css'

export const Header = ({ heroRef }) => {
    const [headerFilled, setHeaderFilled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= heroRef?.current?.offsetHeight - 45) {
                setHeaderFilled(true)
            } else {
                setHeaderFilled(false)
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
                    <a className={styles.headerTitle}>Jack G</a>
                    <div className={styles.headerLinks}>
                        <a id="HeaderButtons">Skills</a>
                        <a id="HeaderButtons">Portfolio</a>
                        <a id="HeaderButtons">About</a>
                        <a id="HeaderButtons">Contact</a>
                    </div>
                    <a id="HeaderSpacer"></a>
                </div>
            </ContentConstraint>
        </header>
    )
}
