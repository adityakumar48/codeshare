import Image from "next/image";
import CodeEditor from "./components/CodeEditor";

export default function Home() {
  return (
    <main>
      <div className="code-editor-ref">
        <CodeEditor />
      </div>
    </main>
  );
}
