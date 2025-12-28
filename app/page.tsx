import { db } from "@/db";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();
  console.log("snippets :", snippets);

  return (
    <div className="pageContainer">
      <div className="flex flex-col gap-5">
        {snippets?.map(({ id, title, code }) => (
          <div
            key={id}
            className="w-full text-center"
          >
            <span className="mr-4">{title}:</span>
            <span>{code}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
