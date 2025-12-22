import { NextPage } from "next";

interface SnippetViewPageProps {
  params: Promise<{ id: string }>;
}

const SnippetViewPage: NextPage<SnippetViewPageProps> = async (props) => {
  const { id } = await props.params;
  console.log("id :", id, typeof id);

  return <div>SnippetPage</div>;
};

export default SnippetViewPage;
