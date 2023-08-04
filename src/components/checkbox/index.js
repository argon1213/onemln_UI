import React, { useState } from "react";

const CustomCheckbox = (props) => {
  const {} = props;
  const [value, setValue] = useState(false);
  return (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        className="w-7 h-7 appearance-none border rounded mr-3 cursor-pointer"
        checked={value}
        onChange={(e) => {
          setValue(!value);
        }}
      />
      <span className="text-[18px] font-medium text-[#56595E]">
        Un carattere minuscolo
      </span>
    </div>
  );
};

export default CustomCheckbox;
