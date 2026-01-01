import Button from "@/components/button";
import { db } from "@/db";
import Link from "next/link";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  return (
    <div className="pageContainer">
      <div className="flex items-center justify-around mb-5">
        <h1 className="font-bold text-2xl">Snippets</h1>
        <Link href="/snippets/new">
          <Button name="Create new" />
        </Link>
      </div>
      <div className="flex flex-col gap-5 items-center">
        {snippets?.map(({ id, title }) => (
          <Link
            href={`/snippets/${id}`}
            key={id}
            className="w-[80%] text-center flex justify-between items-center border rounded p-4"
          >
            <span className="mr-4">{title}</span>
            <Button
              name="View"
              className="border rounded p-2 bg-blue-950"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
