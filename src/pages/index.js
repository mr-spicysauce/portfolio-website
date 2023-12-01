import { Header } from '@/components/header'
import { MainHero } from '@/components/heros/main'

import { Suspense, useRef } from 'react'
import { SkillsHero } from '@/components/heros/skills'
import { PortfolioHero } from '@/components/heros/portfolio'
import { ContactHero } from '@/components/heros/contact'
import { AboutHero } from '@/components/heros/about'

export default function Home() {
    const main1Ref = useRef()

    return (
        <>
            <Header heroRef={main1Ref} />
            <MainHero takeRef={main1Ref} />
            <SkillsHero />
            <PortfolioHero />
            <AboutHero />
            <ContactHero />
        </>
    )
}
