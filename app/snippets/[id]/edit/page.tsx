import { NextPage } from "next";

interface SnippetEditPageProps {
  params: Promise<{ id: string }>;
}

const SnippetEditPage: NextPage<SnippetEditPageProps> = async (props) => {
  const { id: stringId } = await props.params;

  return (
    <div className="pageContainer">Editing snippet with id {stringId}</div>
  );
};

export default SnippetEditPage;
