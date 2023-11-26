import styles from './content.module.css'

export const ContentConstraint = ({ children }) => (
    <div className={styles.content}>{children}</div>
)
