import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ToolMeta {
  title: string
  excerpt: string
  slug: string
  image: string
  affiliateUrl: string
}

const toolsPath = path.join(process.cwd(), 'content/tools')

export async function getToolBySlug(slug: string) {
  const source = fs.readFileSync(path.join(toolsPath, `${slug}.mdx`), 'utf8')
  const { content, data } = matter(source)
  return { meta: data as ToolMeta, content }
}

export async function getAllTools(): Promise<ToolMeta[]> {
  const files = fs.readdirSync(toolsPath)
  return files.map((file) => {
    const source = fs.readFileSync(path.join(toolsPath, file), 'utf8')
    const { data } = matter(source)
    return data as ToolMeta
  })
}
