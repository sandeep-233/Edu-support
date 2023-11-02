import React from 'react'
import Template from '../components/core/Auth/Template'
import signupImage from '../assets/Images/signup.webp'


const Signup = () => {
  return (
    <Template
     title="Join the millions learning to code with EduSupport for free"
     desc1="Build skills for today, tomorrow and beyond"
     desc2="Educaion to future-proof your career."
     image={signupImage}
     formType="signup"
    />
  )
}

export default Signup
