import { Editor } from "./editor";

interface DcoumentIdPageProps {
    params: Promise<{documentId: string}>;
}

const DocumentPage = async ({ params }: DcoumentIdPageProps) => {

    const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  )
}

export default DocumentPage
