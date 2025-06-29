import Link from 'next/link'
import Image from 'next/image'
import { ToolMeta } from '../lib/mdx'

export default function ToolCard({ tool }: { tool: ToolMeta }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <Image src={tool.image} alt={tool.title} width={400} height={200} className="rounded" />
      <h2 className="text-xl font-semibold mt-2">{tool.title}</h2>
      <p className="mt-2 text-sm text-gray-700">{tool.excerpt}</p>
      <Link href={`/tools/${tool.slug}`} className="text-indigo-600 hover:underline mt-4 inline-block">Learn More</Link>
    </div>
  )
}
