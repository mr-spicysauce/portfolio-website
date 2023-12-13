import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/markdown.css'

import { FooterHero } from 'src/components/heros/footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <FooterHero />
        </>
    )
}
