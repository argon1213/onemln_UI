
function LogIn () {
  return(
    <div className="flex justify-center">
      <div className="w-[360px] py-[100px]">
        <div>
          <p className="text-[30px] font-medium text-center">Log in to your account</p>
          <p className="text-[16px] text-center">Welcome back! Please enter your details.</p>
        </div>
        <div className="my-6">
          <div className="my-4">
            <p className="text-[14px] py-2">Email</p>
            <input type="text" placeholder="Enter your email" className="custom-input" />
          </div>
          <div className="my-4">
            <p className="text-[14px] py-2">Password</p>
            <input type="password" placeholder="Password" className="custom-input" />
          </div>
        </div>
        <div>
          <button className="w-full btn-primary">Sign in</button>
        </div>
        <div className="my-6">
          <p className="text-center">Don’t have an account? <a href="#" className="text-[#CC5200]" >Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;