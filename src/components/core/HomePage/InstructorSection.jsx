import React from 'react'
import HighlightText from './HighlightText'
import Button from './Button'
import Instructor from '../../../assets/Images/Instructor.png'
// import FaArrowRight from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>

        <div className='w-[50%]'>
          <img src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg"
           alt=""
           className='shadow-white'
          />
        </div>

        <div className='w-[50%] flex flex-col gap-10'>

          <div className='text-4xl font-semibold w-[50%]'>
            Become an
            <HighlightText text={" Instructor"} color={"bg-gradient-to-tl from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}/>
          </div>

          <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
          Instructors from around the world teach millions of students on EduSupport. We provide the tools and skills to teach what you love.
          </p>

          <div className='w-fit'>
            <Button active={true} linkto={"/signup"}>
              <div className='flex flex-row gap-2 items-center'>
                Start Learning Today 
                {/* <FaArrowRight/> */}
              </div>
            </Button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default InstructorSection
