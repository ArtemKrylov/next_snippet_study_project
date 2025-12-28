import Button from "@/components/button";
import TextInput from "@/components/textInput";
import { db } from "@/db";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const CreateSnippetPage: NextPage = async ({}) => {
  const createSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("snippetName") as string;
    const code = formData.get("snippetText") as string;
    if (!title || !code) return;

    await db.snippet.create({
      data: { title, code },
    });
    redirect("/");
  };

  return (
    <div className="pageContainer">
      <form
        className="flex flex-col gap-5 items-center justify-center w-70 self-center"
        action={createSnippet}
      >
        <h1 className="font-bold">Create new snippet</h1>
        <TextInput
          label="Name"
          name="snippetName"
          grow
          width="12rem"
        />
        <TextInput
          label="Text"
          textArea
          name="snippetText"
          grow
          width="12rem"
        />
        <Button
          type="submit"
          name="Save"
          // onClick={onSaveSnippetBtnClick}
        />
      </form>
    </div>
  );
};

export default CreateSnippetPage;
