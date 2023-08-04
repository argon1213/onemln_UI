import React from "react";
import { useState, useEffect } from "react";
import CustomInput from "../../../components/input";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

const EmailRegister = (props) => {
  const { email, errorEmail, setEmail, nextFunc, backFunc } = props;
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    if (email !== "" && email !== undefined) {
      setButtonState(true);
    } else {
      if (buttonState) setButtonState(false);
    }
  }, [email]);

  return (
    <div>
      <div className="pb-4">
        <span
          className="bg-[#F3F3F3] rounded-full w-[50px] h-[50px] inline-block leading-[50px] align-middle text-center"
          onClick={backFunc}
        >
          <ArrowSmallLeftIcon className="w-[30px] h-[30px] inline-block text-[#56595E] font-bold" />
        </span>
      </div>
      <div>
        <div className="font-bold text-[32px]">
          Piacere di conoscerti, Luca!
        </div>
        <div className="text-[18px] pt-4">
          Inserisci la tua email riceverai un codice di verifica. Per continuare
          la registrazione.
        </div>
      </div>
      <div className="my-8">
        <div>
          <CustomInput
            type="text"
            placeholder="Email"
            errorState={errorEmail}
            setValue={setEmail}
            style={"bg-[#F3F3F3]"}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        <div className="submit-content">
          <button
            className={buttonState ? "btn-primary" : "btn-secondary"}
            onClick={nextFunc}
          >
            Invia email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailRegister;
