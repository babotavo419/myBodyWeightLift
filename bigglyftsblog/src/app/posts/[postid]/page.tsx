import getFormattedDate from "../../../../lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "../../../../lib/post";
import { notFound } from "next/navigation";
import Link from "next/link";
import 'highlight.js/styles/github-dark.css';

export const revalidate = 0;

type Props = {
    params: {
        postId: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta(); // deduped!

    if (!posts) return [];

    return posts.map((post) => ({
        postId: post.id.replace('posts/', '') // Remove the 'posts/' prefix
    }));
}

export async function generateMetadata({ params: { postId } }: Props) {
    console.log(`Generating metadata for post ID: ${postId}`);

    const post = await getPostByName(`posts/${postId}.mdx`); // Adjust to match the file path

    if (!post) {
        console.log(`No post found with ID: ${postId}`);
        return {
            title: 'Post Not Found'
        };
    }

    console.log(`Metadata for post ID: ${postId} fetched successfully.`);
    return {
        title: post.meta.title,
    };
}

export default async function Post({ params: { postId } }: Props) {
    console.log(`Fetching post details for post ID: ${postId}`);

    const post = await getPostByName(`posts/${postId}.mdx`); // Adjust to match the file path

    if (!post) {
        console.log(`Post not found, triggering 404 for post ID: ${postId}`);
        notFound();
        return; // Ensure function stops executing after notFound()
    }

    const { meta, content } = post;
    const pubDate = getFormattedDate(meta.date);

    console.log(`Post ID: ${postId} - Title: ${meta.title} fetched and rendered.`);

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ));

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">{pubDate}</p>
            <article>{content}</article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>
        </>
    );
}


