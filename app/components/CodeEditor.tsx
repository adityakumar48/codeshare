"use client";
import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// Languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";

// Themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-crimson_editor";
import Image from "next/image";
import { initialCode } from "@/utils/Utilites";

interface Props {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

const CodeEditor = ({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: Props) => {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);
  const [title, setTitle] = useState("Untitled-1");
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleResize = (e: any, direction: any, ref: any, pos: any) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
      minHeight={166}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resizable-container relative"
      style={{ background: background }}
    >
      <div
        className="code-block"
        style={{
          padding: currentPadding,
        }}
      >
        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>
          <div className="input-control w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"
            />
          </div>

          <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
            <img src={icon} alt="icon" className="w-[33px]" />
          </div>
        </div>
        <AceEditor
          value={code}
          name="code-edior"
          onChange={handleCodeChange}
          height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
          fontSize={16}
          showGutter={false}
          theme={theme}
          mode={language.toLowerCase()}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
        />
      </div>
    </Resizable>
  );
};

export default CodeEditor;
