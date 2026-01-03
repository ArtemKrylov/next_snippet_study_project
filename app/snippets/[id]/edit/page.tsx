import SnippetEditorWithBtn from "@/components/snippetEditorWithBtn";
import { db } from "@/db";
import { editSnippetAction } from "@/serverActions/snippetActions";

import { NextPage } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface SnippetEditPageProps {
  params: Promise<{ id: string }>;
}

const SnippetEditPage: NextPage<SnippetEditPageProps> = async (props) => {
  const { id: stringId } = await props.params;
  const id = +stringId;

  const snippet = await db.snippet.findFirst({ where: { id } });

  const onSaveEdittedSnippet = async (value: string) => {
    "use server";

    await editSnippetAction({ id, code: value ?? "" });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
  };

  return (
    <div className="pageContainer">
      Editing snippet with id {stringId}
      <SnippetEditorWithBtn
        onSave={onSaveEdittedSnippet}
        snippet={snippet}
      />
    </div>
  );
};

export default SnippetEditPage;
