import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { login } from "../../../services/operations/authAPi"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'



const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const [showPassword, setShowPassword] = useState(false);

  const {email, password} = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }


  return (
    <div>
      <form action=""
       onSubmit={handleOnSubmit}
       className='mt-6 flex w-full flex-col gap-y-4'
      >

        <label htmlFor="" className='w-full'>
          <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
            Emial Address <sup className='text-pink-200'>*</sup>
          </p>
          <input type="email"
           name="email"
           value={email}
           onChange={handleOnChnage}
           placeholder='Enter Email Address'
           style={{
            boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
           }}
           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>

        <label htmlFor="" className='relative'>
          <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
            Password <sup className='text-pink-200'>*</sup>
          </p>
          <input  type={showPassword ? "text" : "password"}
           name="password"
           value={password}
           onChange={handleOnChnage}
           placeholder='Enter Password'
           style={{
            boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
           }}
           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          <span
           onClick={() => setShowPassword((prev) => !prev)}
           className='absolute right-3 top-[38px] z-[10] cursor-pointer '
          >
            {
              showPassword ?
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              : <AiOutlineEye fontSize={24} fill="#AFB2BF" /> 
            }
          </span>

          <Link to="/forgot-password">
            <p className='mt-1 ml-auot max-w-max text-xs text-blue-100'>
              Forgot Passowrd
            </p>
          </Link>
        </label>

        <button
         type='submit'
         className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900'
        >
          Sing In
        </button>

      </form>
    </div>
  )
}

export default LoginForm
