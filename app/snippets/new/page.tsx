"use client";

import Button from "@/components/button";
import TextInput from "@/components/textInput";

import { createSnippetAction } from "@/serverActions/snippetActions";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import { useActionState } from "react";

const CreateSnippetPage: NextPage = ({}) => {
  async function createSnippet(
    formState: { message: string },
    formData: FormData
  ) {
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

    redirect("/");
  }

  const [{ message }, formAction] = useActionState(createSnippet, {
    message: "",
  });

  return (
    <div className="pageContainer">
      <form
        className="flex flex-col gap-5 items-center justify-center w-70 self-center"
        action={formAction}
      >
        <h1 className="font-bold">Create new snippet</h1>
        <TextInput
          label="Name"
          name="title"
          grow
          width="12rem"
        />
        <TextInput
          label="Text"
          textArea
          name="code"
          grow
          width="12rem"
        />
        {message && (
          <div className="p-2 my-2 border rounded bg-red-200 text-red-500">
            {message}
          </div>
        )}
        <Button
          type="submit"
          name="Save"
        />
      </form>
    </div>
  );
};

export default CreateSnippetPage;
