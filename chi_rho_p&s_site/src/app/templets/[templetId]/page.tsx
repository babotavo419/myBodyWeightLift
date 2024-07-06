import getFormattedDate from "../../../../lib/getFormattedDate";
import { getSortedTempletData, getTempletData } from "../../../../lib/templets";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
    const templet = getSortedTempletData()

    return templet.map((templet) => ({
        templetId: templet.id
    }));
}

export function generateMetadata({ params }: { params: { templetId: string } }) {
    const templets = getSortedTempletData()
    const { templetId } = params

    const templet = templets.find(templet => templet.id === templetId)

    if (!templet) {
        return {
            title: 'Templet Not Found'
        }
    }

    return {
        title: templet.title,
    }
}

export default async function Templet({ params }: { params: { templetId: string } }) {
    const templet = getSortedTempletData()
    const { templetId } = params

    if (!templet.find(templet => templet.id === templetId)) notFound()

    const templetData = await getTempletData(templetId)
    if (!templetData) {

        notFound();
    }

    const { title, date, contentHtml } = templetData

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-7 prose prose-xl prose-invert mx-auto">
            <h1 className="text-3xl mt-5 mb-0">{title}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/blog">← Back to index</Link>
                </p>
            </article>
        </main>
    )
}