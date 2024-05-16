import { getSortedTempletData } from "../../../lib/templets"
import ListTemplets from "./ListTemplets"

export default async function Templets() {
    const templet = await getSortedTempletData()

    if (!templet) {
        return <p className="mt-10 darl:text-white text-center">Sorry, no templets available.</p>
    }

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Work Out Templets</h2>
            <ul className="w-full list-none p-0">
                {templet.map(templet => (
                    <ListTemplets key={templet.id} templet={templet} />
                ))}
            </ul>
        </section>
    )
}