import Link from "next/link"
import getFormattedDate from "../../../lib/getFormattedDate"

type Props = {
    templet: {
      id: string;
      title: string;
      date: string;
      description: string,
    };
  };

export default function ListTemplets({ templet }: Props) {
    const { id, title, date, description } = templet
    const formattedDate = getFormattedDate(date)

    return (
        <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="mt-4 text-2xl text-white/90">
                <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/templets/${id}`}>
                    {title}
                </Link>
                <br />
                <p className="text-sm text-gray-600">{description}</p>
                <br />
                <p className="text-sm text-gray-600">{formattedDate}</p>
            </li>
        </main>
    )
}