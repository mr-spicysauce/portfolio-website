import styles from './portfolio.module.css'
import DownArrow from '@/assets/SVG/DownArrow'
import { ContentConstraint } from '../constraints/content'
import Link from 'next/link'
import { projects } from '../../data/projects'
import { PortfolioAttributes } from './portfolio-attributes'

export const PortfolioHero = ({ projects }) => {
    return (
        <div className={styles.heroContainer} id="portfolio">
            <header className={styles.overview}>
                <div className={styles.overviewTextContent}>
                    <h1>Portfolio</h1>
                    <p>
                        A showcase of both current and previous projects <br />
                        that highlights my experience developing games.
                    </p>
                </div>

                <div className="VideoEmbed">
                    <iframe
                        src="https://www.youtube.com/embed/45csSEotJY8?si=J2XOUKWezHfHJ3bO"
                        title="YouTube video"
                        allowFullScreen
                        frameborder="0"
                    />
                </div>
            </header>
            <div className={styles.itemContainer}>
                {projects.map((project) => {
                    return (
                        <PortfolioItem
                            key={project.id}
                            {...project}
                            href={`/projects/${project.id}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export const PortfolioItem = ({
    name,
    images,
    tools,
    timeSpent,
    roles,
    description,
    href,
}) => {
    return (
        <Link className={styles.item} href={href}>
            <h1>{name}</h1>
            <div className={styles.itemImageCarousel}>
                <img src={images[0]} className={styles.itemImage}></img>
            </div>

            <div className={styles.itemContent}>
                <PortfolioAttributes
                    tools={tools}
                    timeSpent={timeSpent}
                    roles={roles}
                />

                <div className={styles.itemContentSection}>
                    <div className={styles.itemDescriptionContainer}>
                        <p>{description}</p>
                    </div>
                </div>

                <div className={styles.readMoreButton}>
                    <h3 className="PortfolioItemContentSectionHeadertext">
                        Read more
                    </h3>
                    <DownArrow />
                </div>
            </div>
        </Link>
    )
}
