

import { toast } from 'react-hot-toast'
import{endpoints} from '../apis'
import { apiConnector } from '../apiConnector'

import {setLoading, setToken} from '../../slices/authSlice'
import {resetCart} from "../../slices/cartSlice"
import { setUser } from '../../slices/profileSlice'



const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTKEN_API,
    RESETPASSWORD_API,
} = endpoints

export function sendOtp(email, navigate) {
    console.log("Enter sendOtp:", email)
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))

        try {
            // console.log("inside try block:")
            const response = await apiConnector("POST", SENDOTP_API, {
                email,
                checkUserPresent: true,
            })

            // console.log("SENDOTP API RESPONSE: ", response);
            console.log(response.data.message);

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success('OTP Sent Successfully')
            navigate("/verify-email")
        }
        catch(error) {
            console.log("SENDOTP API ERROR: ", error)
            toast.dismiss(toastId)
        }

        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function signUp(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
) {
    return async (dispatch) => {
        const toastId = toast.loading("loading..")
        dispatch(setLoading(true))

        try{
         const response = await apiConnector("POST", SIGNUP_API, {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp
         })   
        //  console.log("SIGNUP API RESPONSE: ", response)

         if(!response.data.success) {
            throw new Error(response.data.message)
         }

         toast.success("Signup Successful")
         navigate("/login")

        }
        catch(error) {
            console.log("SIGNUP API ERROR: ", error);
            toast.error("Signup Failed")
            navigate("/signup")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function login(email, password, navigate) {
    return async(dispatch) => {
        const toastId = toast.loading("Loading..");
        dispatch(setLoading(true))

        try{
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            })

            // console.log("LOGIN API RESPONSE: ", response)

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Login Successful");

            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.userImage
                ? response.data.user.userImage
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            
            dispatch(setUser({...response.data.user, image: userImage}))
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard/my-profile")

        }
        catch(error) {
            console.log("LOGIN API ERROR:", error);
            toast.error("Login failed")
        }
        
        dispatch(setLoading(false))
        toast.dismiss(toastId);
    }
}

export function getPasswordResetToken(email, setEmailSent) {
    return async (dispatch) => {
        // const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));

        try{
            const response = await apiConnector("POST", RESETPASSTKEN_API, {
                email,
            })

            // console.log("RESETPASSTOKEN RESPONSE: ", response)

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Reset Email Sent")
            setEmailSent(true)
        }
        catch(error) {
            console.log("RESETPASSTOKEN ERROR: ", error)
            toast.error("Failed To Send Reset Email")
        }

        // toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function resetPassword(password, confirmPassword, token) {
    return async (dispatch) => {

        // const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try{
            const response = await apiConnector("POST", RESETPASSWORD_API, {
                password,
                confirmPassword,
                token,
            })

            // console.log("RESETPASSWORD RESPONSE: ", response);

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Password Reset Successfully")
        }
        catch(error) {
            console.log("RESETPASSWORD ERROR: ", error);
            toast.error("Failed to Reset Password")
        }

        // toast.dismiss(toastId);
        dispatch(setLoading(false));

    }
}

export function logout(navigate) {
    return(dispatch) => {
        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(resetCart())

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        toast.success("Logged Out")
        navigate("/")
    }
}