import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

type Filetree = {
  tree: {
    path: string;
  }[];
};

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    console.log("Fetching post by name:", fileName);
    const res = await fetch(`https://api.github.com/repos/OctavioWebDev/BlogPost/contents/${fileName}?ref=main`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });

    if (!res.ok) {
        console.log("Failed to fetch the post:", fileName, res.status);
        return undefined;
    }

    const data = await res.json();
    const rawMDX = Buffer.from(data.content, 'base64').toString('utf8');

    if (!rawMDX) {
        console.log("Post content is empty:", fileName);
        return undefined;
    }

    console.log("Compiling MDX for file:", fileName);

    try {
        const { frontmatter, content } = await compileMDX({
            source: rawMDX,
            components: {},
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    ],
                },
            },
        });

        const id = fileName.replace(/\.mdx$/, '');

        console.log("Compiled post metadata:", id, frontmatter);
        const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title as string, date: frontmatter.date as string, tags: frontmatter.tags as string[] }, content };

        return blogPostObj;
    } catch (error) {
        console.error("[next-mdx-remote] error compiling MDX:", error);
        return undefined;
    }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  console.log("Fetching all posts metadata");
  const res = await fetch('https://api.github.com/repos/OctavioWebDev/BlogPost/git/trees/main?recursive=1', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!res.ok) {
    console.log("Failed to fetch posts list", res.status);
    return undefined;
  }

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree.map((obj) => obj.path).filter((path) => path.endsWith('.mdx'));
  const posts: Meta[] = [];

  for (const file of filesArray) {
    console.log("Processing file:", file);
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
      console.log("Added post meta:", meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}


