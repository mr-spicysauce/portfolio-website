import styles from './header.module.css'

export default function Header() {
    return (
        <header id={styles.header}>
            <a className={styles.Title} href="#">
                {process.env.NEXT_PUBLIC_WEBSITE_NAME || 'Jack'}
            </a>
        </header>
    )
}
