import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDir = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  frontMatter: Record<string, any>;
  mdxSource: any;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const file = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(file);
  const mdxSource = await serialize(content, { scope: data });
  return { slug, frontMatter: data, mdxSource };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
