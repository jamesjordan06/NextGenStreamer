import { getAllTools, getToolBySlug } from '../../lib/mdx'
import AffiliateButton from '../../components/AffiliateButton'
import JasperDescription from '../../components/JasperDescription'
import Image from 'next/image'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const tools = await getAllTools()
  return tools.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = await getToolBySlug(params.slug)
  return { title: meta.title, description: meta.excerpt }
}

export default async function ToolPage({ params }: { params: { slug: string } }) {
  const { meta, content } = await getToolBySlug(params.slug)
  const { content: mdx } = await compileMDX({
    source: content,
    components: { AffiliateButton, JasperDescription },
  })
  return (
    <article className="prose">
      <h1>{meta.title}</h1>
      <Image src={meta.image} alt={meta.title} width={800} height={400} />
      {/* @ts-expect-error Async Server Component */}
      {mdx}
    </article>
  )
}
