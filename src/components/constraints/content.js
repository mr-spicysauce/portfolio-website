import styles from './content.module.css'

export const ContentConstraint = ({ children, className }) => (
    <div className={`${styles.content} ${className || ''}`}>{children}</div>
)
