"use client";
import { languages } from "@/utils/Utilites";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface Props {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({ language, setLanguage, setActiveIcon }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };

  return (
    <div onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Language</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language}
        <ChevronDown />
      </div>
      {showDropdown && (
        <div className="dropdown-menu w-[120px] top-[94px]">
          {languages.map((lang, i) => {
            return (
              <div key={i}>
                <button
                  onClick={() => handleLanguageChange(lang.name)}
                  className="dropdown-item  capitalize"
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
