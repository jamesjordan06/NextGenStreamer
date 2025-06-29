import { withMDX } from '@next/mdx'

const nextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {},
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
})

export default nextConfig
