import FooterStyles from './footer.module.css'
import mainHeroStyles from './main.module.css'
import { IconButton } from '../button/iconButton'

export const FooterHero = () => {
    return (
        <div id={FooterStyles.footerMain}>
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

            <span id={FooterStyles.copyrightText}>
                ©{process.env.NEXT_PUBLIC_WEBSITE_NAME || 'Jack'}
            </span>
        </div>
    )
}
