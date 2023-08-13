import React from 'react'
import ContactForm from '../components/core/ContactUs/ContactForm'
import * as Icons from "react-icons/hi";

const connectToUs = [
  {
    icon: "HiChatAlt2",
    heading: "Chat on us",
    desc: "Our friendly team is here to help",
    detail: "@mail address",
  },
  {
    icon: "HiLocationMarker",
    heading: "Visit us",
    desc: "Come and say hello at our office HQ",
    detail: "Here is the location / address",
  },
  {
    icon: "HiPhone",
    heading: "Call us",
    desc: "Mon - Fri From 8am to 5pm",
    detail: "+123 456 7890",
  },
]

const Contact = () => {
  
  return (
    <div className='text-white flex justify-center items-center mt-[90px] w-full mb-[90px]'>
      <div className='flex flex-col md:flex-row justify-center gap-[52px] w-11/12'>

        {/* section 1 */}
        <div className='w-full md:w-[30%] h-fit p-3 bg-richblack-800'>
            {
              connectToUs.map((card, index) => {
                  const Icon = Icons[card.icon];
                  return(
                    <div key={index} className='flex flex-col gap-[12px] p-4 rounded-md'>
                      <div className='flex gap-1'>
                        <Icon size={25}/>
                        <div>
                          <h1 className='text-richblack-5 font-semibold text-[18px]'>{card?.heading}</h1>
                          <p className='text-richblack-200 font-semibold text-[14px]'>{card?.desc}</p>
                          <p className='text-richblack-200 font-semibold text-[14px]'>{card?.detail}</p>
                        </div>
                      </div>
                    </div>
                  )
              })
            }
        </div>

        {/* section 2 */}
        <div className='w-full md:w-[45%] p-3 border-richblack-500 rounded-md border-2'>
          <div>
            <h1 className='text-[36px] font-semibold text-richblack-5 '>Got a Idea? We've got the skills. Let's team up</h1>
            <p className='text-[16px] font-medium text-richblack-300'>Tell us more about yourself and what you're got in mid.</p>
          </div>
          <div className='mt-[32px]'>
            <ContactForm/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
