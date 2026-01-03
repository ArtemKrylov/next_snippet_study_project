"use client";

import { FC, useActionState } from "react";
import TextInput from "./textInput";
import Button from "./button";

interface CreateSnippetFormProps {
  createSnippet: (
    formState: {
      message: string;
    },
    formData: FormData
  ) => Promise<{ message: string }>;
}

const CreateSnippetForm: FC<CreateSnippetFormProps> = ({ createSnippet }) => {
  const [{ message }, formAction] = useActionState(createSnippet, {
    message: "",
  });

  return (
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
  );
};

export default CreateSnippetForm;
