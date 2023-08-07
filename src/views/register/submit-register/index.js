import React from "react";

const SubmitRegister = (props) => {
  const { email } = props;
  return (
    <div>
      <div>
        <div className="title">Email inviata!</div>
        <div className="description">
          {`Le istruzioni per impostare la password sono state inviate a ${email}`}
        </div>
      </div>
      <div className="flex flex-wrap justify-start pt-12">
        <div className="submit-content">
          <button
            className="btn-primary"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Torna alla home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitRegister;
