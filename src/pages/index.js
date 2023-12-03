import { Header } from '@/components/header'
import { MainHero } from '@/components/heros/main'

import { Suspense, useRef } from 'react'
import { SkillsHero } from '@/components/heros/skills'
import { PortfolioHero } from '@/components/heros/portfolio'
import { ContactHero } from '@/components/heros/contact'
import { AboutHero } from '@/components/heros/about'
import { FooterHero } from '@/components/heros/footer'
import Head from 'next/head'

export default function Home() {
    const main1Ref = useRef()

    return (
        <>
            <Head>
                <title>
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME ||
                        'Portfolio Website'}
                </title>
            </Head>
            <Header heroRef={main1Ref} />
            <MainHero takeRef={main1Ref} />
            <SkillsHero />
            <PortfolioHero />
            <AboutHero />
            <ContactHero />
            <FooterHero />
        </>
    )
}
