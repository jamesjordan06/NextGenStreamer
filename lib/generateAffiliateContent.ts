// lib/generateAffiliateContent.ts

import { writeFileSync } from "fs";
import path from "path";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add this in your .env.local file
});

export async function generateAffiliatePage(topic: string) {
  const prompt = `
You are an expert affiliate content writer for a website called AI Hustle Stack.

Write an SEO-optimized affiliate blog post targeting the topic: "${topic}".

Structure:
- Title (H1)
- Introduction paragraph (1 short paragraph, include keyword)
- Comparison Table: 3 AI tools (name, price, pros, cons, affiliate CTA text)
- Section: "Which should you pick?" with a brief recommendation
- Include frontmatter at the top with:
  - title
  - description
  - slug (kebab-case)
  - keywords
  - affiliateLinks: array of { name, url }

Use clean markdown formatting. Keep it under 700 words. Use casual, confident tone.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  const content = response.choices[0].message?.content;

  if (!content) {
    throw new Error("No content returned from OpenAI.");
  }

  const slug = topic.toLowerCase().replace(/\s+/g, "-");
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  writeFileSync(filePath, content.trim());

  console.log(`✅ Created: content/${slug}.mdx`);
}