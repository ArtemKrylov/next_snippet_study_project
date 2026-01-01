"use client";

import { Editor } from "@monaco-editor/react";

type Props = {
  defaultValue: string | undefined;
  onChange: (value: string | undefined) => void;
  height?: string;
  defaultLanguage?: "javascript";
  className?: string | undefined;
};

const CodeEditor = ({
  defaultValue,
  onChange,
  height = "40vh",
  defaultLanguage = "javascript",
  className,
}: Props) => {
  return (
    <Editor
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
      options={{ minimap: { enabled: false } }}
      height={height}
      theme="vs-dark"
      defaultLanguage={defaultLanguage}
    />
  );
};

export default CodeEditor;
