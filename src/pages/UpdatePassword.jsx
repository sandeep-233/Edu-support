import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { resetPassword } from '../services/operations/authAPi'

const UpdatePassword = () => {

    const {loading} = useSelector((state) => state.auth)
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:""
    })

    const handlOnChange = (event) =>{
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }))
    }

    const {password, confirmPassword} = formData;

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const token = location.pathname.split("/").at(-1)
        dispatch(resetPassword(password, confirmPassword, token, navigate))
    }

  return (
    <div>
      {
        loading ?
        (<div className='spinner'></div>)
        : (
            <div>
                <h1>
                    Choose new Password
                </h1>
                <p>
                    Almost done. Enter your new password and you're all set.
                </p>
                <form action="" onSubmit={handleOnSubmit}>
                    <label htmlFor="" className='relative'>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            New Password <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                         required
                         type= {showPassword ? "text" : "password"}
                         name="password"
                         value={password}
                         onChange={handlOnChange}
                         placeholder='Enter Password'
                         className='form-style w-full !pr-10'
                        />
                        <span
                         onClick={() => setShowPassword((prev) => !prev)}
                         className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showPassword ?
                             (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                             : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <label htmlFor="" className='relative mt-3 block'>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Confirm Password <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                         required
                         type={showConfirmPassword ? "text" : "password"}
                         name="confirmPassword"
                         value={confirmPassword}
                         onChange={handlOnChange}
                         placeholder='Confirm Password'
                         className='form-style w-full !pr-10'
                        />
                        <span
                         onClick={() => setShowConfirmPassword((prev) => !prev)}
                         className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showConfirmPassword ?
                             (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                             : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <button
                     type='submit'
                     className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                    >
                        Reset Password
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-between">
                    <Link to={"/login"}>
                        <p className="flex items-center gap-x-2 text-richblack-5">
                            <BiArrowBack /> Back To Login
                        </p>
                    </Link>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default UpdatePassword
