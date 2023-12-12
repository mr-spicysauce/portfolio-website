import { remark } from 'remark'
import matter from 'gray-matter'
import html from 'remark-html'

export async function getAllProjectIds() {
    const { resolve } = await import('path')
    const { readdirSync } = await import('fs')

    const dirContents = readdirSync(
        resolve(process.cwd(), 'src', 'data', 'projects')
    )
    const mdFiles = dirContents
        .filter((f) => f.endsWith('.md'))
        .map((f) => f.replace('.md', ''))

    return mdFiles
}

export async function getAllProjectData() {
    const mdFiles = await getAllProjectIds()

    const projects = []

    for await (const f of mdFiles) {
        projects.push(await getProjectData(f))
    }

    return projects.sort((a, b) => a.index - b.index)
}

export async function getProjectData(id) {
    const { resolve } = await import('path')
    const { readFileSync } = await import('fs')

    const fullPath = resolve(
        process.cwd(),
        'src',
        'data',
        'projects',
        `${id}.md`
    )

    const fileContents = readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const content = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        content,
        ...matterResult.data,
    }
}
