import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import AffiliateButton from "@/components/AffiliateButton";

interface ToolPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    description: string;
  };
}

const components = {
  AffiliateButton,
};

export default function ToolPage({ source, frontMatter }: ToolPageProps) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <main className="prose mx-auto px-4 py-8">
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), "content/tools");
  const files = fs.readdirSync(dir);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), "content/tools", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const matter = await import("gray-matter");
  const { content, data } = matter.default(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        title: data.title || slug,
        description: data.description || "",
      },
    },
  };
};