import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {apiConnector} from '../../../services/apiConnector';
import {contactusEndpoint} from '../../../services/apis'
import CountryCode from '../../../data/countrycode.json'


const ContactForm = () => {

    const  [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm(); 

    const submitContactForm = async(data) => {
        console.log("Logging Data: ", data);
        try{
            setLoading(true);
            const res = await apiConnector(
                "POST",
                contactusEndpoint.CONTACT_US_API,
                data
            )
            setLoading(false)
        }
        catch(error) {
            console.log("Error: ", error.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }
    },[reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}
        className='text-[14px] text-richblack-5 w-[100%] flex flex-col justify-center items-start gap-3'
    >
      {/* first name and last name  */}
      <div className='flex lg:flex-row gap-5 '>
            {/* first name  */}
            <div className='flex flex-col items-start gap-1 '>
                    
                    <label htmlFor="firstname">First Name</label>
                    <input
                    type="text"
                    name='firstname'
                    id='firstname'
                    placeholder='Enter your first name'
                    {...register("firstname", {required: true})}
                    className='bg-richblack-800  h-[48px] w-full rounded p-3'
                    />
                    {
                        errors.firstName && (
                            <span>
                                Please enter your name
                            </span>
                        )
                    }
            </div>

            {/* last name  */}
            <div className='flex flex-col items-start gap-1' >
                    
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name='lastname'
                        id='lastname'
                        placeholder='Enter your last name'
                        {...register("lastname")}
                        className='bg-richblack-800 h-[48px] w-full rounded p-3'
                    />
                    {
                        errors.firstName && (
                            <span>
                                Please enter your name
                            </span>
                        )
                    }
            </div>
      </div>

      {/* email address  */}
      <div className='flex flex-col w-full'>
        <label htmlFor="email">Email Address</label>
        <input
         type="email"
         name='email'
         id='email'
         placeholder='Enter your email address'
         {...register("email", {required: true})} 
         className='bg-richblack-800 h-[48px] rounded p-3'
        />
        {
            errors.email && (
                <span>
                    Please enter your email address
                </span>
            )
        }
      </div>

      {/* phone number  */}
      <div className='flex flex-col items-start gap-1 w-full'>

        <label htmlFor="phonenumber">Phone Number</label>
        <div className='flex flex-row gap-1 w-full'>
            {/* dropdown */}
            <select
             name="dropdown"
             id="dropdown"
             {...register("countrycode", {required: true})} 
             className='bg-richblack-800 w-[81px] h-[48px] rounded p-3'
            >
                {
                    CountryCode.map((element, index) => {
                        return(
                            <option
                             value={element.code}
                             key={index}
                            >
                                {element.code} - {element.country}
                            </option>
                        )
                    })
                }
            </select>

            <input
             type="number"
             name='phonenumber'
             id='phonenumber'
             placeholder='12345 67890'
             {...register("phoneno", {
                required:{value: true, message:"Please enter Phone Number"},
                maxLength:{value:10, message:"Invalid Phone Number"},
                minLength: {value:8, message:"Invalid Phone Number"}
             })}
             className='bg-richblack-800 h-[48px] w-full rounded p-3'
            />
        </div>
        {
            errors.phoneNo && (
                <span>
                    {errors.phoneNo.message}
                </span>
            )
        }
      </div>

      {/* message textarea  */}
      <div className='flex flex-col w-full'>
        <label htmlFor="message">Message</label>
        <textarea
         name="message"
         id="message"
         cols="30"
         rows="10"
         placeholder='Enter your message...'
         {...register("message", {required: true})}
         className='bg-richblack-800 rounded p-3'
        />
        {
            errors.message && (
                <span>
                    Please enter your message.
                </span>
            )
        }
      </div>

      {/* submit button  */}
       <button
        disabled={loading}
        type='submit'
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
            ${
                !loading &&
                "transition-all duration-200 hover:scale-95 hover:shadow-none"
            }
            disabled:bg-richblack-500 sm:text-[16px]
        `}
       >
        Send Message
       </button>
    </form>
  )
}

export default ContactForm
