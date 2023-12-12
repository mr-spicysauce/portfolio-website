import { FooterHero } from '@/components/heros/footer'
import PortfolioItemStyle from '@/styles/PortfolioItem.module.css'
import styles from '@/components/heros/portfolio.module.css'

import ToolIcon from '@/assets/SVG/Tool'
import TimeIcon from '@/assets/SVG/Time'
import RoleIcon from '@/assets/SVG/Roles'

import Header from '@/components/header/PortfolioItemHeader'

export default function Home() {
    return (
        <>
            <Header />
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
                    <p
                        className={PortfolioItemStyle.MaincontentText}
                        id="intro"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam tristique sodales ornare. Morbi sodales arcu a
                        tellus finibus, vel vulputate odio aliquet. Aliquam sem
                        eros, pharetra in lorem quis, pulvinar mollis purus.
                        Vestibulum vel sapien ac quam tempus elementum id sit
                        amet tortor. Nullam tortor turpis, porta ut metus ut,
                        porta varius tortor. Morbi nec placerat lacus. Quisque
                        finibus tempor lectus sit amet facilisis. Aenean sit
                        amet elementum felis, ac condimentum dui. Duis gravida
                        egestas dapibus. Aenean vulputate ultricies sapien, quis
                        euismod enim ullamcorper nec.
                        <br />
                        <br />
                        In ultrices tortor sit amet tellus tincidunt, id
                        accumsan urna rutrum. Nullam lorem leo, porta in
                        hendrerit ut, sagittis eget enim. Aliquam erat volutpat.
                        In volutpat, augue in consectetur commodo, nunc lacus
                        scelerisque mi, vel sagittis arcu velit sed leo.
                        Suspendisse vel dui eu dolor faucibus viverra. Phasellus
                        ultricies dictum enim, facilisis hendrerit nulla
                        tristique at. Nam aliquam ex et est gravida, lacinia
                        varius leo aliquam. Sed eu finibus tortor. Suspendisse
                        nisi nunc, varius sit amet luctus sit amet, rutrum ac
                        tortor.
                    </p>
                    <img
                        className={PortfolioItemStyle.LargeImage}
                        src={'/assets/WalkingSteadTestImage1.png'}
                    />
                </div>
                <FooterHero />
            </div>
        </>
    )
}
