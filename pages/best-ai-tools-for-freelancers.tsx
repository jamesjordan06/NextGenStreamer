import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug } from '../lib/mdx';
import AffiliateButton from '../components/AffiliateButton';

const components = { AffiliateButton };

export const getStaticProps: GetStaticProps = async () => {
  const post = await getPostBySlug('best-ai-tools-for-freelancers');
  return { props: { ...post } };
};

export default function BestToolsPage({ mdxSource }: any) {
  return <MDXRemote {...mdxSource} components={components} />;
}
