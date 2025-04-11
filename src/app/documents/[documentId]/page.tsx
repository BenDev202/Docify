import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DcoumentIdPageProps {
    params: Promise<{documentId: string}>;
}

const DocumentPage = async ({ params }: DcoumentIdPageProps) => {

    const { documentId } = await params;
    


  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  )
}

export default DocumentPage
