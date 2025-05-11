import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Invalid Password");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex bg-slate-800 p-1 gap-x-1 my-4 rounded-full max-w-max text-sm">
        <button
          className={`py-1.5 px-4 rounded-full transition-all duration-200 ${accountType === "student" ? "bg-slate-950 text-slate-200" : "bg-transparent text-slate-400"}`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`py-1.5 px-4 rounded-full transition-all duration-200 ${accountType === "instructor" ? "bg-slate-950 text-slate-200" : "bg-transparent text-slate-400"}`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      {/* Form */}
      <form className="flex flex-col w-full gap-y-3 mt-4 text-sm" onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          {/* First Name */}
          <label className="w-full">
            <p className="text-slate-300 mb-1 text-xs">First Name <sup>*</sup></p>
            <input
              className="bg-slate-900 rounded-md text-slate-300 w-full px-3 py-2 text-sm"
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="Enter First Name"
              onChange={changeHandler}
            />
          </label>

          {/* Last Name */}
          <label className="w-full">
            <p className="text-slate-300 mb-1 text-xs">Last Name <sup>*</sup></p>
            <input
              className="bg-slate-900 rounded-md text-slate-300 w-full px-3 py-2 text-sm"
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Enter Last Name"
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* Email */}
        <label className="w-full">
          <p className="text-slate-300 mb-1 text-xs">Email Address <sup>*</sup></p>
          <input
            className="bg-slate-900 rounded-md text-slate-300 w-full px-3 py-2 text-sm"
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={changeHandler}
          />
        </label>

        {/* Passwords */}
        <div className="flex gap-x-4">
          {/* Password */}
          <label className="w-full relative">
            <p className="text-slate-300 mb-1 text-xs">Create Password <sup>*</sup></p>
            <input
              className="bg-slate-900 rounded-md text-slate-300 w-full px-3 py-2 text-sm pr-10"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
            />
            <span className="absolute right-3 top-[32px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* Confirm Password */}
          <label className="w-full relative">
            <p className="text-slate-300 mb-1 text-xs">Confirm Password <sup>*</sup></p>
            <input
              className="bg-slate-900 rounded-md text-slate-300 w-full px-3 py-2 text-sm pr-10"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <span className="absolute right-3 top-[32px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* Submit */}
        <button className="bg-yellow-400 rounded-md font-medium text-black px-4 py-2 mt-3 text-sm">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
