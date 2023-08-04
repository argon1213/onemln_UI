import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const CustomCircleCheck = (props) => {
  const {} = props;
  const [value, setValue] = useState(false);
  return (
    <div className="flex items-center my-2">
      <span className="w-6 h-6 rounded-full bg-[#56595E] inline-block text-center">
        <CheckIcon className="w-4 h-4 text-white inline-block" />
      </span>
      <span className="text-[18px] font-medium text-[#56595E]">
        Un carattere minuscolo
      </span>
    </div>
  );
};

export default CustomCircleCheck;
