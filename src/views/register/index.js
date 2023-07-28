function Register() {
  return (
    <div className="flex justify-center">
      <div className="w-[360px] py-[100px]">
        <div>
          <p className="text-[30px] font-medium text-center">
            Create an account
          </p>
        </div>
        <div className="my-8">
          <div className="my-4">
            <input type="text" placeholder="Name" className="custom-input" />
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="custom-input"
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder="Password"
              className="custom-input"
            />
          </div>
          <div className="my-4">
            <button className="w-full btn-primary">Get started</button>
          </div>
        </div>

        <div className="my-6">
          <p className="text-center">
            Already have an account?{" "}
            <a href="#" className="text-[#CC5200]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
