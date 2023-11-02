import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"



const timeline = [
  {
    Logo: logo1,
    heading: "Leadership",
    Description: "Fully commited to the success company",
  },
  {
    Logo: logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  }
]

const TimelineSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-15 items-center'>

      <div className='w-full md:w-[45%] flex flex-col gap-5'>
        {
          timeline.map( (element, index) => {
            return (
              <div className='flex flex-row gap-6' 
                   key={index}  
              >
                {/* image  */}
                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                  <img src={element.Logo} alt="" />
                </div>

                {/* text  */}
                <div>

                  <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                  <p className='text-base'>{element.Description}</p>

                </div>
              </div>
            )
          })
        }
      </div>

      <div className='relative shadow-blue-200'>

        <img src="https://ecampusontario.pressbooks.pub/app/uploads/sites/1648/2021/05/iStock-1211977288.jpg"
          alt="timelineImage"
          className='shadow-white object-cover h-fit w-[710px]'
        />

        <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                        left-[50%] translate-x-[-50%] translate-y-[-50%]' >

          <div className='flex gap-5 items-center px-7 flex-row border-r border-caribbeangreen-300'>
            <p className='text-3xl font-bold'>10</p>
            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
          </div>

          <div className='flex gap-5 items-center px-7'>
            <p className='text-3xl font-bold'>250</p>
            <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TimelineSection
