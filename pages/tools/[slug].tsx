import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getAllSlugs, getPostBySlug } from '../../lib/mdx';
import AffiliateButton from '../../components/AffiliateButton';

const components = { AffiliateButton };

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs().filter((s) => !s.startsWith('best-ai-tools'));
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);
  return { props: { ...post } };
};

export default function ToolPage({ mdxSource, frontMatter }: any) {
  return <MDXRemote {...mdxSource} components={components} />;
}
