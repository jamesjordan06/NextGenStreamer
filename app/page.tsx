import ToolCard from '../components/ToolCard'
import { getAllTools } from '../lib/mdx'

export default async function Page() {
  const tools = await getAllTools()
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tools.map(tool => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  )
}
