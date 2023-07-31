import React from "react";

const useAuth = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

function Header() {
  const currentUser = useAuth();

  return (
    <div className="border-b ">
      <div className="flex justify-between items-center h-[80px] inner-container">
        <img
          src="/logo.png"
          alt="logo"
          className="cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        {!currentUser ? (
          <div>
            <button
              className="px-4 mx-3"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Log in
            </button>
            <button
              className="btn-primary px-[18px]"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
