import Button from "@/components/button";
import { db } from "@/db";
import { ISnippet } from "@/ts/types";
import { NextPage } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetViewPageProps {
  params: Promise<{ id: string }>;
}

const SnippetViewPage: NextPage<SnippetViewPageProps> = async (props) => {
  const { id: stringId } = await props.params;

  const snippet: ISnippet | null = await db.snippet.findFirst({
    where: { id: +stringId },
  });

  if (!snippet) return notFound();

  const { title, code } = snippet;

  return (
    <div className="pageContainer">
      <div className="flex flex-col items-center justify-center w-full gap-5">
        <div className="w-[50%] mb-2 flex items-center justify-between">
          <span className="text-xl font-bold">{title}</span>
          <div className="flex gap-4">
            <Link href={`/snippets/${stringId}/edit`}>
              <Button name="Edit" />
            </Link>
            <Button name="Delete" />
          </div>
        </div>
        <pre className="border-gray-200 rounded w-[90%] min-h-50 p-5 bg-gray-200">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default SnippetViewPage;
