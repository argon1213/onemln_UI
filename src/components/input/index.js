import React, { useEffect } from "react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const CustomInput = (props) => {
  const { errorState, value, setValue, type, placeholder, style } = props;

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getStyleState = () => {
    if (isFocused || (inputValue !== "" && inputValue !== undefined)) {
      return true;
    }
    return false;
  };

  return (
    <div className="my-3 relative">
      <input
        type={
          type === "text" ? "text" : `${showPassword ? "text" : "password"}`
        }
        value={value}
        placeholder={""}
        className={`custom-input h-[6.6vh] ${style ? style : ""} ${
          errorState ? "!border-[#FE1C4E] " : " "
        } ${getStyleState() ? "pb-0 pt-[2vh] bg-[#F3F3F3]" : ""} ${
          type === "password" ? "pr-14" : ""
        }`}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <span
        className={`absolute text-[#56595E] font-medium left-[3vh] truncate duration-200 ${
          getStyleState()
            ? "top-[0.4vh] text-[1.6vh]"
            : "text-[2.3vh] top-1/2 transform -translate-y-1/2 "
        }`}
      >
        {placeholder}
      </span>
      {type === "password" && inputValue !== "" && inputValue !== undefined && (
        <button
          onClick={handleTogglePassword}
          className="absolute right-6 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-[2.2vh] w-[2.2vh] text-[#56595E]" />
          ) : (
            <EyeIcon className="h-[2.2vh] w-[2.2vh] text-[#56595E]" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
