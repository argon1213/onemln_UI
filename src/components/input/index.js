import React from "react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const CustomInput = (props) => {
  const { errorState, value, setValue, type, placeholder, style } = props;

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="my-4 relative">
      <input
        type={
          type === "text" ? "text" : `${showPassword ? "text" : "password"}`
        }
        value={value}
        placeholder={isFocused ? "" : placeholder}
        className={`custom-input h-[60px] ${style ? style : ""} ${
          errorState ? "!border-[#FE1C4E] " : " "
        } ${getStyleState() ? "pb-0 pt-6" : ""} ${
          type === "password" ? "pr-14" : ""
        }`}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {getStyleState() && (
        <span className="absolute text-[#56595E] text-[14px] top-1 left-8">
          {placeholder}
        </span>
      )}
      {type === "password" && (
        <button
          onClick={handleTogglePassword}
          className="absolute right-6 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-6 w-6 text-[#56595E]" />
          ) : (
            <EyeIcon className="h-6 w-6 text-[#56595E]" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
