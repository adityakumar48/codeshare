"use client";
import { useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { backgrounds, languages } from "@/utils/Utilites";
import LanguageSelector from "./components/LanguageSelector";
import ThemeSelector from "./components/ThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector";
import PaddingSelector from "./components/PaddingSelector";
import html2canvas from "html2canvas";

export default function Home() {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [theme, setTheme] = useState("monokai");
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  const exportPng = async () => {
    const editor = editorRef.current;

    if (editor) {
      const canvas = await html2canvas(editor);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();
    }
  };

  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px] flex gap-6 p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3C3C3C] shadow-md ">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />

        <div className="export-btn self-center ml-auto">
          <button
            className=" flex items-center gap-3 py-2 px-3 rounded-md text-sm text-blue-400 bg-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300"
            onClick={exportPng}
          >
            Export PNG
          </button>
        </div>
      </header>
      <div className="code-editor-ref mt-[10rem]" ref={editorRef}>
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          currentPadding={currentPadding}
          background={background}
        />
      </div>
    </main>
  );
}
