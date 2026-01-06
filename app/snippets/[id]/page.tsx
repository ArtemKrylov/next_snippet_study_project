import Button from "@/components/button";
import { db } from "@/db";
import { Snippet } from "@/generated/prisma";
import { deleteSnippetAction } from "@/serverActions/snippetActions";
// import { Snippet } from "@prisma/client";
import { NextPage } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

interface SnippetViewPageProps {
  params: Promise<{ id: string }>;
}

const SnippetViewPage: NextPage<SnippetViewPageProps> = async (props) => {
  const { id: stringId } = await props.params;
  const id = +stringId;

  const snippet: Snippet | null = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  const { title, code } = snippet;

  async function onDeleteSnippet() {
    "use server";

    await deleteSnippetAction(id);

    revalidatePath("/");
    redirect("/");

    // swalCustom.confirm(async () => {
    //   await deleteSnippetAction(id);

    //   redirect("/");
    // });
  }

  return (
    <div className="pageContainer">
      <div className="flex flex-col items-center justify-center w-full gap-5">
        <div className="w-[50%] mb-2 flex items-center justify-between">
          <span className="text-xl font-bold">{title}</span>
          <div className="flex gap-4">
            <Link href={`/snippets/${stringId}/edit`}>
              <Button name="Edit" />
            </Link>
            <Button
              name="Delete"
              onClick={onDeleteSnippet}
            />
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

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }));
}
