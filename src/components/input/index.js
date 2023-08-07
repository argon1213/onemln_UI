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
        placeholder={isFocused ? "" : placeholder}
        className={`custom-input h-[50px] ${style ? style : ""} ${
          errorState ? "!border-[#FE1C4E] " : " "
        } ${getStyleState() ? "pb-0 pt-4" : ""} ${
          type === "password" ? "pr-14" : ""
        }`}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {getStyleState() && (
        <span className="absolute text-[#56595E] text-[12px] top-1 left-8 truncate">
          {placeholder}
        </span>
      )}
      {type === "password" && inputValue !== "" && inputValue !== undefined && (
        <button
          onClick={handleTogglePassword}
          className="absolute right-6 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-[#56595E]" />
          ) : (
            <EyeIcon className="h-5 w-5 text-[#56595E]" />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
