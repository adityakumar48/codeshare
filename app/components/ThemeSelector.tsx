"use client";
import { themes } from "@/utils/Utilites";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title capitalize w-[120px]">
          {" "}
          {theme} <ChevronDown />{" "}
        </div>
        {showDropdown && (
          <div className="dropdown-menu relative top-[94px] w-[120px]">
            {themes.map((theme, i) => {
              return (
                <button
                  className="text-left capitalize"
                  key={i}
                  onClick={() => handleThemeChange(theme)}
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default ThemeSelector;
