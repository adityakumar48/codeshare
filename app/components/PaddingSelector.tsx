"use client";
import React from "react";

interface Props {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

const PaddingSelector = ({
  paddings,
  currentPadding,
  setCurrentPadding,
}: Props) => {
  const changePadding = (padding: string) => {
    setCurrentPadding(padding);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium ">Padding Selector</p>
      <div className="flex items-center gap-6">
        {paddings.map((padding, i) => {
          return (
            <button
              key={i}
              className={`h-[37px] flex  items-center justify-center text-sm px-2 ${
                currentPadding === padding
                  ? "bg-[#3C3C3C] text-[#fff] rounded-md"
                  : "bg-[#191919] text-[#fff] hover:cursor-pointer hover:rounded-md ease-linear transition-all duration-300 hover:bg-[#3C3C3C] hover:text-[#fff]"
              } rounded-md}`}
              onClick={() => changePadding(padding)}
            >
              {padding}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaddingSelector;
