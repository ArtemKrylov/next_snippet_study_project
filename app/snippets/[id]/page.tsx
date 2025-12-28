import { db } from "@/db";
import { ISnippet } from "@/ts/types";
import { NextPage } from "next";
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
        <div className="">{title}</div>
        <div className="">{code}</div>
      </div>
    </div>
  );
};

export default SnippetViewPage;
