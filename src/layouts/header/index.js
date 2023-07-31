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
        <a href="/">
          <img
            src="/logo.png"
            alt="logo"
            className="cursor-pointer"
          />
        </a>
        {!currentUser ? (
          <div>
            <a href="/login" className="px-4 mx-3 cursor-pointer">
              Log in
            </a>
            <a
              href="/register"
              className="btn-primary px-[18px] cursor-pointer"
            >
              Sign Up
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
