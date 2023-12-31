import React from "react";
import { useState, useEffect } from "react";
import CustomInput from "../../../components/input";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

const EmailForgotPage = (props) => {
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
          className="bg-[#F3F3F3] rounded-full w-[4.8vh] h-[4.8vh] inline-block leading-[4.8vh] align-middle text-center cursor-pointer"
          onClick={backFunc}
        >
          <ArrowSmallLeftIcon className="w-[3vh] h-[3vh] inline-block text-[#56595E] font-bold" />
        </span>
      </div>
      <div>
        <div className="title">Reimposta la tua password</div>
        <div className="description">
          Inserisci l’indirizzo email associato al tuo account. Ti invieremo
          un’email con le istruzioni per reimpostare la tua password.
        </div>
      </div>
      <div className="my-8">
        <div className="input-content">
          <CustomInput
            type="text"
            placeholder="Email"
            errorState={errorEmail}
            value={email}
            setValue={setEmail}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        <div className="submit-content">
          <button
            className={
              buttonState
                ? "btn-primary button-size"
                : "btn-secondary button-size"
            }
            onClick={nextFunc}
          >
            Invia email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailForgotPage;
