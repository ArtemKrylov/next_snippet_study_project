import CreateSnippetForm from "@/components/createSnippetForm";

import { createSnippetAction } from "@/serverActions/snippetActions";
import { NextPage } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreateSnippetPage: NextPage = ({}) => {
  async function createSnippet(
    formState: { message: string },
    formData: FormData
  ) {
    "use server";

    const title = formData.get("title");
    const code = formData.get("code");

    if (!title || !code) return { message: "Fill in all fields!" };
    if (typeof title !== "string" || title.length < 3)
      return { message: "Too short title" };
    if (typeof code !== "string" || code.length < 5)
      return { message: "Too short code" };

    try {
      await createSnippetAction({ title, code });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { message: error.message };
      }

      return { message: "Something went wrong... Try again, please" };
    }

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="pageContainer">
      <CreateSnippetForm createSnippet={createSnippet} />
    </div>
  );
};

export default CreateSnippetPage;
