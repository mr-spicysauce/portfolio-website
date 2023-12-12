import styles from './portfolio.module.css'
import ToolIcon from '@/assets/SVG/Tool'
import TimeIcon from '@/assets/SVG/Time'
import RoleIcon from '@/assets/SVG/Roles'

export const PortfolioAttributes = ({ tools, timeSpent, roles }) => {
    return (
        <>
            <div className={styles.itemContentSection}>
                <header className={styles.itemContentSectionHeader}>
                    <ToolIcon></ToolIcon>
                    <h3>Tools:</h3>
                </header>
                <p>{tools.join(', ')}</p>
            </div>

            <div className={styles.itemContentSection}>
                <header className={styles.itemContentSectionHeader}>
                    <TimeIcon></TimeIcon>
                    <h3>Time Spent:</h3>
                </header>
                <p>{timeSpent}</p>
            </div>

            <div className={styles.itemContentSection}>
                <header className={styles.itemContentSectionHeader}>
                    <RoleIcon></RoleIcon>
                    <h3>Roles:</h3>
                </header>
                <p>{roles.join(', ')}</p>
            </div>
        </>
    )
}
