import styles from './not-found.module.css'
import DownArrow from 'src/assets/SVG/DownArrow'
import Link from 'next/link'

export const NotFoundHero = () => {
    return (
        <div className={styles.heroContainer}>
            <header className={styles.overview}>
                <div className={styles.overviewTextContent}>
                    <h1>404</h1>
                    <p>
                        This page unfortunately cannot be found or no longer
                        exists.
                    </p>

                    <Link className={styles.goHomeLink} href={'/'}>
                        Go Home
                        <DownArrow />
                    </Link>
                </div>
            </header>
        </div>
    )
}
