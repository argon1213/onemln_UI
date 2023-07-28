function Header() {
  return (
    <div className="border-b ">
      <div className="flex justify-between items-center h-[80px] inner-container">
        <img src="/src/assets/images/logo.png" />
        <div>
          <button className="px-4 mx-3">Log in</button>
          <button className="btn-primary px-[18px]">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
