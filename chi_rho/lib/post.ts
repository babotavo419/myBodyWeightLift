import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  author: string;
  date: string;
  tags: string[];
  modified: string;
  imageUrl: string;
}

const postsDirectory = path.join(process.cwd(), 'public', 'assets', 'posts')

export function getSortedPostsData(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Directory not found: ${postsDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      shortDescription: matterResult.data.description,
      longDescription: matterResult.data.longDescription || matterResult.data.description,
      tags: matterResult.data.tags,
      modified: matterResult.data.modified,
      author: matterResult.data.author,
      imageUrl: matterResult.data.image,
      category: matterResult.data.category,
    }

    return blogPost
  });

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string): Promise<(BlogPost & { contentHtml: string }) | undefined> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return undefined;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const BlogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    shortDescription: matterResult.data.description,
    longDescription: matterResult.data.longDescription || matterResult.data.description,
    tags: matterResult.data.tags,
    modified: new Date().toISOString(),
    author: matterResult.data.author,
    imageUrl: matterResult.data.image,
    contentHtml,
    category: matterResult.data.category,
  }

  return BlogPostWithHTML
}

export async function getPosts(): Promise<BlogPost[]> {
  return getSortedPostsData();
}
