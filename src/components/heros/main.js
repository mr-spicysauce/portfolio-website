import { useEffect } from 'react'
import { IconButton } from '../button/iconButton'
import mainHeroStyles from './main.module.css'
import { output } from '../../../next.config'

export const MainHero = ({ takeRef }) => {
    return (
        <div ref={takeRef} className={mainHeroStyles.mainHeroContainer}>
            <div className={mainHeroStyles.mainHeroInner}>
                <h1>{process.env.NEXT_PUBLIC_WEBSITE_NAME || 'Jack'}</h1>
                <h3>Game Developer and Programmer</h3>
                <div className={mainHeroStyles.iconsContainer}>
                    <IconButton
                        href="https://github.com/mr-spicysauce"
                        src="/assets/github.png"
                    />

                    <IconButton
                        href={`https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}/`}
                        src="/assets/linkedin.png"
                    />

                    <IconButton
                        href={`https://itch.io/profile/${process.env.NEXT_PUBLIC_ITCH_USERNAME}`}
                        src="/assets/itch-io.png"
                    />

                    <IconButton
                        href={`https://www.youtube.com/@${process.env.NEXT_PUBLIC_YOUTUBE_USERNAME}`}
                        src="/assets/youtube.png"
                    />
                </div>
            </div>
        </div>
    )
}
