import React, { useState } from 'react'
import {HomePageExplore} from "../data/homepage-explore"
import HighlightText from '../components/core/HomePage/HighlightText';
import CourseCard from '../components/core/HomePage/CourseCard';



const tabsNmae = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Career paths",
];

export const Notes = () => {
    const [currentTab, setCurrentTab] = useState(tabsNmae[0]);

    const setMyNotes = (value)=>{
        setCurrentTab(value);
    }

  return (
    <div className='w-full h-[100vh]'>
      
        <div className="text-4xl text-richblack-500 font-semibold text-center my-10">
            Unlock the 
            <HighlightText text={" Power of Knowledge "} color={"bg-gradient-to-tl from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}/>
        </div>

        <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
            {
                tabsNmae.map( (element, index) => {
                    return (
                        <div
                            className={`text-[16px] flex flex-row items-center gap-2
                            ${currentTab === element
                            ? "bg-richblack-900 text-richblack-5 font-medium" 
                            : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                            hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}

                            key={index}
                            
                            onClick={() => setMyNotes(element)}
                        >
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className="hidden lg:block lg:h-[200px]"></div>

        {/* notes cards  */}
        <div>

        </div>


    </div>
  )
}
