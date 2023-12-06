import styles from './portfolio.module.css'
import ToolIcon from '@/assets/SVG/Tool'
import DownArrow from '@/assets/SVG/DownArrow'
import TimeIcon from '@/assets/SVG/Time'
import RoleIcon from '@/assets/SVG/Roles'
import { ContentConstraint } from '../constraints/content'

export const PortfolioHero = () => {
    const portfolioItems = {
        'The Walking Stead': {
            tools: ['Godot', 'Blender'],
            timeSpent: '2 months',
            images: ['/assets/WalkingSteadImg.png'],
            roles: ['Project Lead', 'Solo Developer'],
            description:
                'The walking stead was the first group project I ever worked on. Its a fan game based on Project Zomboid, which we made our own story/lore when we played it and made this game around it.',
        },
        'VR Aim Trainer': {
            tools: ['Godot', 'Blender', 'Figma'],
            timeSpent: '1 month',
            images: ['/assets/VRaim.png'],
            roles: ['Solo Developer'],
            description:
                'There where no good VR aim trainer on steam, I set out to make my own to learn the challenges of VR development. I hope to release on itch.io soon and make a YouTube video documenting it.',
        },
        'Dungeon Resurgence': {
            tools: ['Godot', 'Blender'],
            timeSpent: '3 weeks',
            images: ['/assets/DungeonImg.png'],
            roles: ['Solo Developer'],
            description:
                'Dungeon Resurgence was my first full game I made for my college assignment. This my first time developing a games from start to finish while documenting every aspect of it.',
        },
    }

    return (
        <div className={styles.heroContainer} id="portfolio">
            <header className={styles.overview}>
                <div className={styles.overviewTextContent}>
                    <h1>Portfolio</h1>
                    <p>
                        A showcase of both current and previous projects <br />
                        that highlights my experience developing games
                    </p>
                </div>

                {/* <div className="VideoEmbed">
                    <iframe
                                src="https://www.youtube.com/embed/xj3SZv5lle4?si=5ipg063tolte4QAH"
                                title="YouTube video"
                                allowFullScreen
                            />
                </div> */}
            </header>
            <div className={styles.itemContainer}>
                {Object.keys(portfolioItems).map((key, index) => {
                    const value = portfolioItems[key]

                    const name = key
                    const timeSpent = value.timeSpent
                    const roles = value.roles.join(', ')
                    const tools = value.tools.join(', ')
                    const description = value.description
                    const images = value.images

                    return (
                        <PortfolioItem
                            name={name}
                            timeSpent={timeSpent}
                            tools={tools}
                            roles={roles}
                            description={description}
                            imageSrcArray={images}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const PortfolioItem = ({
    name,
    imageSrcArray,
    tools,
    timeSpent,
    roles,
    description,
}) => {
    return (
        <div className={styles.item}>
            <h1>{name}</h1>
            <div className={styles.itemImageCarousel}>
                <img src={imageSrcArray[0]} className={styles.itemImage}></img>
                <div className={styles.itemImageSelector}>
                    {[...Array(5)].map(() => (
                        <div className="ellipse"></div>
                    ))}
                </div>
            </div>

            <div className={styles.itemContent}>
                <div className={styles.itemContentSection}>
                    <header className={styles.itemContentSectionHeader}>
                        <ToolIcon></ToolIcon>
                        <h3>Tools:</h3>
                    </header>
                    <p>{tools}</p>
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
                    <p>{roles}</p>
                </div>

                <div className={styles.itemContentSection}>
                    <div className={styles.itemDescriptionContainer}>
                        <p>{description}</p>
                    </div>
                </div>

                <button className={styles.readMoreButton}>
                    <h3 className="PortfolioItemContentSectionHeadertext">
                        Read more
                    </h3>
                    <DownArrow></DownArrow>
                </button>
            </div>
        </div>
    )
}
