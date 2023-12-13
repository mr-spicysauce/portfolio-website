import { useRef, useState, useEffect } from 'react'
import { FooterHero } from '@/components/heros/footer'
import styles from '@/components/heros/portfolio.module.css'

import { Header } from '@/components/header'

import { PortfolioAttributes } from '../../components/heros/portfolio-attributes'
import { PortfolioItem } from '@/components/heros/portfolio'

import PortfolioItemStyle from '@/styles/PortfolioItem.module.css'

import { getAllProjectData, getAllProjectIds } from '@/data/projects'

import CloseIcon from '@/assets/SVG/CloseIcon'

import Head from 'next/head'

export async function getStaticProps({ params }) {
    const projectData = await getAllProjectData()

    const project = projectData.find((p) => p.id == params.project_id)

    return {
        notFound: !project,
        props: {
            projects: projectData,
            project,
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectIds()

    return {
        paths: allProjects.map((p) => `/projects/${p}`),
        fallback: true,
    }
}

export default function Project({ projects, project }) {
    const [projectFocusImage, setProjectFocusImage] = useState(null)
    const dialogRef = useRef()
    const titleHolderRef = useRef()

    const onContentClick = (e) => {
        if (e.target instanceof HTMLImageElement) {
            setProjectFocusImage(e.target.src)
        }
    }

    useEffect(() => {
        if (projectFocusImage) {
            dialogRef?.current?.showModal()
        } else {
            dialogRef?.current?.close()
        }
    }, [projectFocusImage])

    return project ? (
        <>
            <Head>
                <title>
                    {`${project.name} - ${
                        process.env.NEXT_PUBLIC_WEBSITE_NAME ||
                        'Portfolio Website'
                    }`}
                </title>
            </Head>
            <Header
                scrollRef={titleHolderRef}
                links={[
                    { name: 'Intro', href: '#intro' },
                    { name: 'Screenshots', href: '#screenshots' },
                    { name: 'What I learnt', href: '#what-i-learned' },
                    { name: 'Conclusion', href: '#conclusion' },
                ]}
            />
            <div className={PortfolioItemStyle.PortfolioItem}>
                <div
                    className={PortfolioItemStyle.Main1}
                    style={{
                        background: `linear-gradient( 180deg, rgba(24, 26, 30, 0) 0%, #181a1e 100% ), url(${project.images[0]})`,
                    }}
                >
                    <div className={PortfolioItemStyle.Main1Holder}>
                        <div
                            className={PortfolioItemStyle.TitleHolder}
                            ref={titleHolderRef}
                        >
                            <h1 className={PortfolioItemStyle.TitleText}>
                                {project.name}
                            </h1>
                            <h3 className={PortfolioItemStyle.Description}>
                                {project.description}
                            </h3>
                        </div>

                        <div className={styles.itemContent}>
                            <PortfolioAttributes
                                tools={project.tools}
                                timeSpent={project.timeSpent}
                                roles={project.roles}
                            />
                        </div>
                    </div>
                </div>

                <dialog
                    className={PortfolioItemStyle.ImageDialog}
                    ref={dialogRef}
                    onClose={() => setProjectFocusImage(null)}
                >
                    <button
                        className={PortfolioItemStyle.ImageDialogClose}
                        onClick={() => {
                            dialogRef?.current?.close()
                        }}
                    >
                        <CloseIcon />
                    </button>

                    <img src={projectFocusImage || ''} />
                </dialog>

                <div
                    className={`${PortfolioItemStyle.MainContent} MarkdownContent`}
                    onClick={(e) => onContentClick(e)}
                    dangerouslySetInnerHTML={{
                        __html: project.content,
                    }}
                ></div>
            </div>

            <div className={styles.otherProjectsContainer}>
                <div className={styles.overviewTextContent}>
                    <h1>Other projects</h1>
                </div>

                <div className={styles.itemContainer}>
                    {projects
                        .filter((p) => p.id != project.id)
                        .splice(0, 3)
                        .map((project) => {
                            return (
                                <PortfolioItem
                                    key={project.id}
                                    {...project}
                                    href={`/projects/${project.id}`}
                                />
                            )
                        })}
                </div>
            </div>
        </>
    ) : (
        <></>
    )
}
