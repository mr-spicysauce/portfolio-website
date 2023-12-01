import { useEffect } from 'react'
import { IconButton } from '../button/iconButton'
import mainHeroStyles from './main.module.css'
import { output } from '../../../next.config'

export const MainHero = ({ takeRef }) => {
    return (
        <div ref={takeRef} className={mainHeroStyles.mainHeroContainer}>
            <div className={mainHeroStyles.mainHeroInner}>
                <h1>Jack G</h1>
                <h3>Game developer & Programmer</h3>
                <div className={mainHeroStyles.iconsContainer}>
                    <IconButton
                        href="https://github.com/mr-spicysauce"
                        src="/assets/github.png"
                    />

                    <IconButton
                        href="https://www.linkedin.com"
                        src="/assets/linkedin.png"
                    />

                    <IconButton
                        href="https://itch.io"
                        src="/assets/itch-io.png"
                    />

                    <IconButton
                        href="https://www.youtube.com"
                        src="/assets/youtube.png"
                    />
                </div>
            </div>
        </div>
    )
}
