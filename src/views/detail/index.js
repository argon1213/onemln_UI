function MyDetail() {
  return (
    <div className="flex justify-center">
      <div className="w-[640px] py-[50px]">
        <div>
          <p className="text-[30px] font-medium text-center">My Details</p>
          <p className="text-[16px] text-center">
            Update your personal details
          </p>
        </div>
        <div className="my-5">
          <div className="py-5 grid grid-cols-3 border-b">
            <div className="text-[14px] py-2">Name</div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Name"
                className="custom-input"
              />
            </div>
          </div>
          <div className="py-5 grid grid-cols-3 border-b">
            <div className="text-[14px] py-2">Email address</div>
            <div className="col-span-2">
              <input
                type="text"
                disabled
                placeholder="Email address"
                className="custom-input"
              />
            </div>
          </div>
          <div className="py-5 grid grid-cols-3 border-b">
            <div className="text-[14px] py-2">House Number</div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="House Number"
                className="custom-input"
              />
            </div>
          </div>
          <div className="py-5 grid grid-cols-3 border-b">
            <div className="text-[14px] py-2">Street address</div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Street address"
                className="custom-input"
              />
            </div>
          </div>
          <div className="py-5 grid grid-cols-3 border-b">
            <div className="text-[14px] py-2">City</div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="City"
                className="custom-input"
              />
            </div>
          </div>
          <div className="py-5 grid grid-cols-3 border-b">
            <div className="text-[14px] py-2">Postcode</div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Postcode"
                className="custom-input"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn-secondary px-[18px] mx-3 text-[14px]">Cancel</button>
          <button className="btn-primary px-[18px] text-[14px]">Save</button>
        </div>
      </div>
    </div>
  );
}

export default MyDetail;
