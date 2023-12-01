import ContactStyles from './contact.module.css'

import GodotEye from 'src/assets/SVG/GodotEye.js'
import ContactDropDownArrow from 'src/assets/SVG/ContactDropDownArrow.js'

export const ContactHero = () => {
    return (
        <div className={ContactStyles.Main5} id="contact">
            <div id={ContactStyles.ContactFrame}>
                <div id={ContactStyles.ContactTitle}>
                    <ContactDropDownArrow />
                    <GodotEye />
                </div>
                <div id={ContactStyles.DiscordTitle}></div>
                <div id={ContactStyles.EmailTitle}></div>
            </div>
        </div>
    )
}
