import ContactStyles from './contact.module.css'

import GodotEye from 'src/assets/SVG/GodotEye.js'
import ContactDropDownArrow from 'src/assets/SVG/ContactDropDownArrow.js'
import ContactIcon from 'src/assets/SVG/ContactIcon.js'
import ContactDiscordIcon from 'src/assets/SVG/ContactDiscordIcon.js'
import ContactEmailIcon from 'src/assets/SVG/ContactEmailIcon.js'

export const ContactHero = () => {
    return (
        <div className={ContactStyles.Main5} id="contact">
            <div id={ContactStyles.ContactFrame}>
                <div id={ContactStyles.ContactTitle}>
                    <ContactDropDownArrow />
                    <div id={ContactStyles.contactTitleIconHolder}>
                        <ContactIcon />
                        <h2 id={ContactStyles.contactTitleText}>Contact</h2>
                    </div>
                    <GodotEye />
                </div>
                <div id={ContactStyles.DiscordTitle}>
                    <div className={ContactStyles.VertLine} />
                    <div className={ContactStyles.sideLine} />
                    <div id={ContactStyles.discordTitleHolder}>
                        <ContactDiscordIcon />
                        <h2 className={ContactStyles.contactText}>
                            Discord:&nbsp;
                            {process.env.NEXT_PUBLIC_DISCORD || 'username'}
                        </h2>
                    </div>
                    <GodotEye />
                </div>
                <div id={ContactStyles.EmailTitle}>
                    <div id={ContactStyles.finalVertLineHolder}>
                        <div id={ContactStyles.finalVertLine} />
                    </div>
                    <div className={ContactStyles.sideLine} />
                    <div id={ContactStyles.discordTitleHolder}>
                        <ContactEmailIcon />
                        <h2 className={ContactStyles.contactText}>
                            Email:&nbsp;
                            {process.env.NEXT_PUBLIC_EMAIL ||
                                'temp_email@temp.com'}
                        </h2>
                    </div>
                    <GodotEye />
                </div>
            </div>
        </div>
    )
}
