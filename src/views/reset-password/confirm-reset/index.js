import React from "react";
import { useState, useEffect } from "react";
import CustomInput from "../../../components/input";
import CustomCheckbox from "../../../components/checkbox";
import CustomCircleCheck from "../../../components/circle_check";

const ConfirmReset = (props) => {
  const {
    password,
    errorPassword,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorConfirmPassword,
    nextFunc,
  } = props;
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    if (password !== "" && password !== undefined) {
      setButtonState(true);
    } else {
      if (buttonState) setButtonState(false);
    }
  }, [password]);

  return (
    <div>
      <div>
        <div className="font-bold text-[32px]">Cambia la password</div>
        <div className="text-[18px] pt-4">
          Utilizza una password complessa che non utilizzi per altri account!
        </div>
      </div>
      <div className="my-8">
        <div className="input-content">
          <CustomInput
            type="password"
            placeholder="Password"
            errorState={errorPassword}
            value={password}
            setValue={setPassword}
          />
          <CustomInput
            type="password"
            placeholder="Confirm Password"
            errorState={errorConfirmPassword}
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div>
            <CustomCircleCheck />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        <div className="submit-content">
          <button
            className={buttonState ? "btn-primary" : "btn-secondary"}
            onClick={nextFunc}
          >
            Continua
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReset;
