import { Header } from '@/components/header'
import { MainHero } from '@/components/heros/main'

import { Suspense, useRef } from 'react'
import { SkillsHero } from '@/components/heros/skills'
import { PortfolioHero } from '@/components/heros/portfolio'
import { ContactHero } from '@/components/heros/contact'
import { AboutHero } from '@/components/heros/about'
import { FooterHero } from '@/components/heros/footer'
import Head from 'next/head'
import { getAllProjectData } from '@/data/projects'

export default function Home({ projects }) {
    const main1Ref = useRef()

    return (
        <>
            <Head>
                <title>
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME ||
                        'Portfolio Website'}
                </title>
            </Head>
            <Header
                heroRef={main1Ref}
                links={[
                    { name: 'Skills', href: '#skills' },
                    { name: 'Portfolio', href: '#portfolio' },
                    { name: 'About', href: '#about' },
                    { name: 'Contact', href: '#contact' },
                ]}
            />
            <MainHero takeRef={main1Ref} />
            <SkillsHero />
            <PortfolioHero projects={projects} />
            <AboutHero />
            <ContactHero />
        </>
    )
}
export async function getStaticProps() {
    const projects = await getAllProjectData()

    return {
        props: {
            projects,
        },
    }
}
