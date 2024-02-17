import { toast } from "react-hot-toast";
import { profileEndpoints } from "../apis";
import { setLoading, setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";

import {logout} from './authAPi'



const {
  GET_USER_DETAILS_API,
  GET_USER_ENROLLED_COURSES_API,
  GET_INSTRUCTOR_DATA_API,
} = profileEndpoints;

export function getUserDetails(token, navigate) {
  return async(dispatch) => {
    const toastId = toast.loading("Loading..")
    dispatch(setLoading(true));

    try{
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization:  `Bearer ${token}`
      })

      console.log("GET USER DETAILS API RESPONSE...", response);

      if(!response.data.success) {
        throw new Error(response.data.message)
      }

      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName}${response.data.data.lastName}`
      
      dispatch(setUser({...response.data.data, image: userImage}))
    }
    catch(error) {
      dispatch(logout(navigate))
      console.log('GET USER DETAILS API ERROR...', error)
      toast.error("Could Not Get User Details")
    }

    toast.dismiss(toastId);
    dispatch(setLoading(false));
  }
}


export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading..");
  let result = []

  try{
    console.log("BEFORE CALLING BACKEND API FOR ENROLLED COURSES");
    const response = await apiConnector("GET", GET_USER_ENROLLED_COURSES_API, null, {
      Authorization: `Bearer ${token}`,
    })

    console.log("AFTER CALLING BACKEDN API FOR ENROLLED COURSES");

    if(!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response?.data?.data;
    console.log('result: ',result);
  }
  catch(error) {
    console.log("GET USER ENROLLED COURSES API ERROR..", error);
    toast.error("Could not get enrolled courses");
  }

  toast.dismiss(toastId);
  return result
}

export async function getInstructorData(token) {
  const toastId =  toast.loading("Loading..");
  let result = [];
  try{
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`,
    })

    console.log("GET_INSTRUCTOR_API_RESPONSE", response);
    result = response?.data?.courses
  }
  catch(error) {
    console.log("GET_INSTRUCTOR_API_ERROR: ", error);
    toast.error("Could not get insturctor data")
  }

  toast.dismiss(toastId);
  return result;
}