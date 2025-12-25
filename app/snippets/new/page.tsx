import TextInput from "@/components/textInput";
import { NextPage } from "next";

const CreateSnippetPage: NextPage = ({}) => {
  return (
    <div className="pageContainer">
      <TextInput label="Name" />
      <TextInput
        label="Text"
        textArea
      />
    </div>
  );
};

export default CreateSnippetPage;
