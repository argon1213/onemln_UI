import React from "react";
import { useState, useEffect } from "react";
import CustomInput from "../../../components/input";

const NameRegister = (props) => {
  const {
    name,
    surName,
    code,
    errorName,
    setName,
    errorSurName,
    setSurName,
    errorCode,
    setCode,
    nextFunc,
  } = props;

  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    if (
      name !== "" &&
      name !== undefined &&
      surName !== "" &&
      surName !== undefined
    ) {
      setButtonState(true);
    } else {
      if (buttonState) setButtonState(false);
    }
  }, [name, surName]);

  return (
    <div>
      <div>
        <div className="font-bold text-[32px]">
          Hey! Lasciati trasportare dai mercati finanziari. Registrati subito
        </div>
        <div className="text-[18px] pt-4">
          Inserisci i tuoi dati anagrafici per continuare
        </div>
      </div>
      <div className="my-8">
        <div>
          <CustomInput
            type="text"
            placeholder="Nome"
            errorState={errorName}
            value={name}
            setValue={setName}
            style={"bg-[#F3F3F3]"}
          />
          <CustomInput
            type="text"
            placeholder="Cognome"
            errorState={errorSurName}
            value={surName}
            setValue={setSurName}
            style={"bg-[#F3F3F3]"}
          />
          <CustomInput
            type="text"
            placeholder="Codice di invito (Opzionale)"
            errorState={errorCode}
            value={code}
            setValue={setCode}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        <div className="submit-content">
          <button
            className={buttonState ? "btn-primary" : "btn-secondary"}
            onClick={nextFunc}
          >
            Registrati
          </button>
        </div>
        <div className="flex">
          <div className="px-6 text-2xl font-medium text-[#56595E] h-full leading-[65px] submit-connecter">
            o
          </div>
          <div className="pr-3">
            <img
              alt="google"
              className="cursor-pointer"
              src="/assets/images/Google_Logo.png"
            />
          </div>
          <div className="pr-3">
            <img
              alt="google"
              className="cursor-pointer"
              src="/assets/images/Facebook_Logo.png"
            />
          </div>
          <div className="pr-3">
            <img
              alt="google"
              className="cursor-pointer"
              src="/assets/images/Apple_Logo.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameRegister;
