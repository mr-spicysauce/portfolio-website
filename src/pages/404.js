import { useRef } from 'react'
import { FooterHero } from '@/components/heros/footer'
import { NotFoundHero } from '@/components/heros/not-found'

import { Header } from '@/components/header'

export default function NotFound() {
    const titleHolderRef = useRef()

    return (
        <>
            <Header scrollRef={titleHolderRef} links={[]} />
            <NotFoundHero />
        </>
    )
}
