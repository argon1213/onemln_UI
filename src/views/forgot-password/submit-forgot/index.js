import React from "react";

const SubmitForgot = (props) => {
  const { email } = props;
  return (
    <div>
      <div>
        <div className="title">Email inviata!</div>
        <div className="description">
          {`Le istruzioni per reimpostare la password sono state inviate a ${email}`}
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
            Torna al login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitForgot;
