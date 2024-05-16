import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const templetsDirectory = path.join(process.cwd(), 'public/assets/templets')

export function getSortedTempletData() {
  const fileNames = fs.readdirSync(templetsDirectory);
  const allTempletsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(templetsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const templets: WorkOutTemplete = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags,

    }

    return templets
  });

  return allTempletsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getTempletData(id: string) {
  const fullPath = path.join(templetsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const TempleteWithHTML: WorkOutTemplete & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    tags: matterResult.data.tags,
    contentHtml,
  }

  return TempleteWithHTML
}