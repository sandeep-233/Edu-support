import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImage from '../assets/Images/login.jpg'


const Login = () => {
  return (
    <Template
     title = "Welcome Back"
     desc1 = 'Build skills for today, tomorrow and beyond.'
     desc2 = 'Education to future-proof your carrer.'
     image = {loginImage}
     formType = 'login'
    />
  )
}

export default Login
