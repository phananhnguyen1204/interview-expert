import CodeEditorBlock from "@/components/code-editor-block";
import { Box } from "@chakra-ui/react";

const CodeEditor = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex flex-row p-2 space-x-2 mb-3">
        <div>
          <h1 className="text-2xl font-semibold text-orange-400">Practice</h1>
          <h1 className="text-3xl font-semibold text-slate-600">Makes</h1>
          <h1 className="text-4xl font-semibold text-orange-400">Perfect!</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            tempora iusto optio! Aliquam dolor fuga nulla atque placeat, ullam
            dolorem et, odit dolore delectus id, illum accusantium earum
            blanditiis. Dolore.
          </p>
        </div>
      </div>
      <CodeEditorBlock />
    </div>
  );
};
export default CodeEditor;
