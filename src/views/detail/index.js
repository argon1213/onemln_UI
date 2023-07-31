import React from "react";
import { useState, useEffect } from "react";
import { editUser, getUser } from "../../apis/user";
import { showNotification } from "../../components/notification";

function MyDetail() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    houseNumber: "",
    city: "",
    postCode: "",
  });

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUserInfo = (userInfo) => {
    setUser({
      ...user,
      name: userInfo.name? userInfo.name: "",
      email: userInfo.email? userInfo.email: "",
      address: userInfo.address? userInfo.address: "",
      houseNumber: userInfo.houseNumber? userInfo.houseNumber: "",
      city: userInfo.city? userInfo.city: "",
      postCode: userInfo.postCode? userInfo.postCode: "",
    });
  };

  const getUserInfo = () => {
    getUser()
      .then((res) => {
        let __user = res.data.data;
        setUserInfo(__user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const submitUserInfo = () => {
    let userInfo = user;
    editUser(userInfo)
      .then((res) => {
        let __user = res.data.data;
        setUserInfo(__user);
        showNotification("My Details saved", "Your details have been saved");
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
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
                value={user.email}
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
                value={user.houseNumber}
                onChange={(e) => {
                  setUser({ ...user, houseNumber: e.target.value });
                }}
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
                value={user.address}
                onChange={(e) => {
                  setUser({ ...user, address: e.target.value });
                }}
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
                value={user.city}
                onChange={(e) => {
                  setUser({ ...user, city: e.target.value });
                }}
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
                value={user.postCode}
                onChange={(e) => {
                  setUser({ ...user, postCode: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="btn-secondary px-[18px] mx-3 text-[14px]"
            onClick={getUserInfo}
          >
            Cancel
          </button>
          <button
            className="btn-primary px-[18px] text-[14px]"
            onClick={submitUserInfo}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyDetail;
