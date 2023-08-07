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
        <div className="title">
          Hey! Lasciati trasportare dai mercati finanziari. Registrati subito
        </div>
        <div className="description">
          Inserisci i tuoi dati anagrafici per continuare
        </div>
      </div>
      <div className="form-content">
        <div className="input-content">
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
        <div className="pr-[1.5vh] mb-[3vh]">
          <button className="btn-secondary button-size" onClick={nextFunc}>
            Registrati
          </button>
        </div>
        <div className="flex mb-[3vh]">
          <div className="pr-[1.5vh] text-xl font-medium text-[#56595E] h-full leading-[50px] submit-connecter">
            o
          </div>
          <div className="pr-[1.5vh]">
            <img
              alt="google"
              className="cursor-pointer min-logo"
              src="/assets/icons/Google_Logo.svg"
            />
          </div>
          <div className="pr-[1.5vh]">
            <img
              alt="google"
              className="cursor-pointer min-logo"
              src="/assets/icons/Facebook_Logo.svg"
            />
          </div>
          <div className="pr-[1.5vh]">
            <img
              alt="google"
              className="cursor-pointer min-logo"
              src="/assets/icons/Apple_Logo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameRegister;
