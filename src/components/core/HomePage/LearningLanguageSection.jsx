import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import Button from './Button'

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>

      <div className='flex flex-col gap-5 items-center'>

        <div className='text-4xl font-semibold text-center'>
          One-To-One
          <HighlightText text={"Mentorship"} color={"bg-gradient-to-tl from-[#5433FF] via-[#20BDFF] to-[#A5FECB]"} />
        </div>

        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
        Need more details? Our expert academic counsellors will be happy to patiently explain everything that you want to know.
        </div>

        <div className='flex flex-row items-center justify-center mt-5'>
          <img src={know_your_progress}
            alt="KnowYourProgress"
            className='oject-contain -mr-32'
          />
          <img src={compare_with_others}
           alt="CompareWithOthers"
           className='object-contain'
          />
          <img src={plan_your_lesson}
           alt="PlanYourLesson"
           className='object-contain -ml-36'
          />
        </div>

        <div className='w-fit'>
          <Button active={true} linkto={"/signup"}>
            <div>
            Speak to an expert
            </div>
          </Button>
        </div>

      </div>
      
    </div>
  )
}

export default LearningLanguageSection
