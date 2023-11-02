import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import HighlightText from '../components/core/HomePage/HighlightText'
import Button from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from '../components/core/HomePage/ExploreMore'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'


const Home = () => {
  return (
    <div>
      {/* section 1 */}

        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between '>
            <Link to={"/signup"} >
                <div className='mx-auto rounded-full bg-richblack-800 font-bold text-richblack-500
                    transition-all duration-200 hover:scale-95 w-fit mt-16  '>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                                   transition-all duration-200 group-hover:bg-richblack-900 '>
                        <p>Become an Instructor</p>
                        <BsFillArrowRightCircleFill/>
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7 '>
                Empower Your Future With
                <HighlightText text={" Coding Skills"} color={"bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}/>
            </div>

            <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300 '> 
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            {/* two buttons signup and login  */}
            <div className='flex flex-row gap-7 mt-8'>
                <Button active={true} linkto={"/signup"}>
                    Learn More
                </Button>

                <Button active={false} linkto={"/login"}>
                    Book a demo
                </Button>
            </div>

            {/* video  */}
            <div className='mx-3 my-12 shadow-blue-200'>
                <video
                muted
                loop
                autoPlay
                >
                    <source src={Banner} type="video/mp4" />
                </video>
            </div>

            {/* code section 1  */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row flex-col"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your
                            <HighlightText text={" coding potential "} color={"bg-gradient-to-tl from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}/>
                            with our online courses
                        </div>
                    }
                    subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    btn1={
                        {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true
                        }                        
                    }

                    codeblock={`<<!DOCTYPE html>
                                <html>
                                <head>
                                    <title>Example</title>
                                    <linkrel="stylesheet"href="styles.css">
                                </head>
                                <body>
                                    <h1>
                                        <a href="/">Header</a>
                                    </h1>
                                    <nav>
                                        <a href="one/">One</a>
                                        <a href="two/">Two</a>
                                        <a href="three/">Three</a>
                                    </nav>
                                </body>`}
                    codeColor={"text-yellow-25"}

                />
            </div>

            {/* code section 2  */}
            <div>
                <CodeBlocks
                    position={'lg:flex-row-reverse flex-col'}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your
                            <HighlightText text={" coding potential "} color={"bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}/>
                            with our online courses
                        </div>
                    }
                    subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    btn1={
                        {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true
                        }                        
                    }

                    codeblock={`<<!DOCTYPE html>
                                <html>
                                <head>
                                    <title>Example</title>
                                    <linkrel="stylesheet"href="styles.css">
                                </head>
                                <body>
                                    <h1>
                                        <a href="/">Header</a>
                                    </h1>
                                    <nav>
                                        <a href="one/">One</a>
                                        <a href="two/">Two</a>
                                        <a href="three/">Three</a>
                                    </nav>
                                </body>`}
                    codeColor={"text-yellow-25"}

                />
            </div>

            {/* Explore more section  */}
            <ExploreMore/>

        </div>

      {/* section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[310px]'>
            
            <div  className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto '>

                <div className='h-[150px]'></div>

                <div className='flex flex-row gap-7 text-white '>
                    <Button active={true} linkto={"/signup"}>
                        <div className='flex items-center gap-3'>
                            Explore Full Catalog
                            <BsFillArrowRightCircleFill/>
                        </div>
                    </Button>
                    <Button active={false} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </Button>
                </div>

            </div>

        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

            <div className='flex flex-row gap-5 mb-10 mt-[95px] '>
                <div className='text-4xl font-semibold w-[45%] '>
                    Get the Skills you need for a 
                    <HighlightText text={" Job that is in demand"} color={"bg-gradient-to-tl from-[#5433FF] via-[#20BDFF] to-[#A5FECB]"}/>
                </div>

                <div className='flex flex-col gap-10 w-[40%] items-center'>
                    <div className='text-[16px]'>
                        The modern EduSupport is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <Button active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </Button>
                </div>
            </div>

            <TimelineSection/>

            <LearningLanguageSection/>

        </div>

      </div>

      {/* section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
            <InstructorSection/>
            
            <h2 className='text-center text-4xl font-semibold mt-10'>review from other learners</h2>
            {/* Review Slider here */}
            <ReviewSlider/>
        </div>

      {/* footer  */}
      <Footer/>

    </div>
  )
}

export default Home
