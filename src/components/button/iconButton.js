import styles from './iconButton.module.css'

export const IconButton = ({ href, src }) => {
    return (
        <a className={styles.iconButton} href={href}>
            <img src={src}></img>
        </a>
    )
}
