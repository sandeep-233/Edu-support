import React, { useState } from 'react'
import Tab from '../../common/Tab'
import { toast } from "react-hot-toast"
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai' 
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { sendOtp } from "../../../services/operations/authAPi"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"




const SignupForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //student or instrucotr
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const {firstName, lastName, email, password, confirmPassword} = formData


    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    // form submit handler 
    const handleOnSubmit = (e) => {
        // console.log("Enter handleOnSumbit handler function")
        e.preventDefault()
        if(password !== confirmPassword) {
            toast.error("Passwords Do NOt Match")
            return
        }
        const signupData = {
            ...formData,
            accountType,
        }
        // console.log("setting signup Data:", signupData);
        dispatch(setSignupData(signupData))
        dispatch(sendOtp(formData.email, navigate))

        //reset
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        })
        setAccountType(ACCOUNT_TYPE.STUDENT)
    }

    // tab componet data
    const tabData = [
        {
            id: 1,
            tabName: "Student",
            type: ACCOUNT_TYPE.STUDENT,
        },
        {
            id: 2,
            tabName: "Instructor",
            type: ACCOUNT_TYPE.INSTRUCTOR,
        },
    ]


  return (
    <div>
      {/* student / Instructor tab  */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />

      {/* form  */}
      <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col gap-y-4">

        <div className="flex gap-x-4">
            <label htmlFor="firstName">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    First Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                 type="text" 
                 required
                 name='firstName'
                 value={firstName}
                 onChange={handleOnChange}
                 placeholder='Enter first name'
                 style={{
                    boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18",
                 }} 
                 className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
                />
            </label>

            <label htmlFor="lastName">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Last Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                 type="text" 
                 required
                 name='lastName'
                 value={lastName}
                 onChange={handleOnChange}
                 placeholder='Enter last name'
                 style={{
                    boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18",
                 }} 
                 className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
                />
            </label>
        </div>

        <label htmlFor="email" className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                 type="email" 
                 required
                 name='email'
                 value={email}
                 onChange={handleOnChange}
                 placeholder='Enter Email Address'
                 style={{
                    boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18",
                 }} 
                 className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
                />
        </label>

        <div className='flex gap-x-4'>
            <label htmlFor="password" className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Create Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                 type={showPassword ? "text" : "password"} 
                 required
                 name='password'
                 value={password}
                 onChange={handleOnChange}
                 placeholder='Enter Password'
                 style={{
                    boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18",
                 }} 
                 className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
                />

                <span
                 onClick={() => setShowPassword((prev) => !prev)}
                 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                    {showPassword ? 
                    (<AiFillEye fontSize={24} fill="#AFB2BF" />)
                    : (<AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />)
                    }
                </span>
            </label>

            <label htmlFor="confirmPassword" className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Confirm Password <sup  className="text-pink-200">*</sup>
                </p>
                <input
                 type={showConfirmPassword ? "text" : "password"} 
                 required
                 name='confirmPassword'
                 value={confirmPassword}
                 onChange={handleOnChange}
                 placeholder='Confirm Password'
                 style={{
                    boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18",
                 }} 
                 className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
                />

                <span
                 onClick={() => setShowConfirmPassword((prev) => !prev)}
                 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                    {showConfirmPassword ? 
                    (<AiFillEye fontSize={24} fill="#AFB2BF" />)
                    : (<AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />)
                    }
                </span>
            </label>
        </div>

        <button
         type='submit'
         className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
            Create Accoutn
        </button>


      </form>
    </div>
  )
}

export default SignupForm
