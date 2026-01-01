"use client";

import { useState } from "react";
import CodeEditor from "./codeEditor";
import Button from "./button";
import { Snippet } from "@prisma/client";

type Props = {
  snippet: Snippet | null | undefined;
  onSave: (value: string) => Promise<void | never>;
};

const SnippetEditorWithBtn = ({ onSave, snippet }: Props) => {
  const [value, setValue] = useState<string | undefined>(snippet?.code);

  function handleChange(newValue: string | undefined): void {
    setValue(newValue);
  }

  async function handleSave() {
    await onSave(value || "");
  }

  return (
    <div>
      <CodeEditor
        defaultValue={value}
        onChange={handleChange}
        className="my-3"
      />
      <Button
        name="Save"
        onClick={handleSave}
        className="ml-auto"
      />
    </div>
  );
};

export default SnippetEditorWithBtn;
