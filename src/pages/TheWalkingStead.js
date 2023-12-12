import { FooterHero } from '@/components/heros/footer'
import PortfolioItemStyle from '@/styles/PortfolioItem.module.css'
import styles from '@/components/heros/portfolio.module.css'

import ToolIcon from '@/assets/SVG/Tool'
import TimeIcon from '@/assets/SVG/Time'
import RoleIcon from '@/assets/SVG/Roles'

export default function Home() {
    return (
        <>
            <div className={PortfolioItemStyle.PortfolioItem}>
                <div className={PortfolioItemStyle.Main1}>
                    <div className={PortfolioItemStyle.Main1Holder}>
                        <div className={PortfolioItemStyle.TitleHolder}>
                            <h1 className={PortfolioItemStyle.TitleText}>
                                Title Of Game
                            </h1>
                            <h3 className={PortfolioItemStyle.Description}>
                                Write a description Write a description Write a
                                description
                            </h3>
                        </div>

                        <div className={styles.itemContent}>
                            <div className={styles.itemContentSection}>
                                <header
                                    className={styles.itemContentSectionHeader}
                                >
                                    <ToolIcon></ToolIcon>
                                    <h3>Tools:</h3>
                                </header>
                                <p>Tool1,Tool2,Tool3</p>
                            </div>
                            {/*//I am just gonna copy this from portfolio.js and
                            just import the css too lol*/}
                            <div className={styles.itemContentSection}>
                                <header
                                    className={styles.itemContentSectionHeader}
                                >
                                    <TimeIcon></TimeIcon>
                                    <h3>Time Spent:</h3>
                                </header>
                                <p>Time</p>
                            </div>
                            <div className={styles.itemContentSection}>
                                <header
                                    className={styles.itemContentSectionHeader}
                                >
                                    <RoleIcon></RoleIcon>
                                    <h3>Roles:</h3>
                                </header>
                                <p>Solo Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={PortfolioItemStyle.MainContent}>
                    <h1>HELLO</h1>
                </div>
                <FooterHero />
            </div>
        </>
    )
}
