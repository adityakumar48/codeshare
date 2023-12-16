"use client";
import { backgrounds } from "@/utils/Utilites";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundSelector = ({ background, setBackground }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="bg-selector relative" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Theme Selector</p>
        <div className="dropdown-title  w-[62px]">
          {" "}
          <div
            className="rounded-full w-[20px] h-[20px]"
            style={{ background: background }}
          ></div>
          <ChevronDown />{" "}
        </div>
        {showDropdown && (
          <div className="dropdown-menu  top-[74px] w-[62px] rounded-full flex flex-col gap-2 ">
            {backgrounds.map((background, i) => {
              return (
                <button
                  className="text-left capitalize w-[20px] h-[20px] rounded-full "
                  key={i}
                  style={{ background: background }}
                  onClick={() => handleBackgroundChange(background)}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default BackgroundSelector;
