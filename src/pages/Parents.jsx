import React from 'react'
import {Articles} from '../data/demoParentsData-articles'
import {VideoDetails} from '../data/demoParentsData-videos'
import {StudentProgress} from '../data/demoParentsData-studentProgess'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import { useState } from 'react'


export const Parents = () => {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const [checkUser, setCheckUser] = useState("hidden");  
     

    
        useEffect(()=>{
            if(chartInstance.current) {
                chartInstance.current.destroy()
            }
            const myChartRef = chartRef.current.getContext('2d');
    
            chartInstance.current = new Chart(myChartRef, {
                type: "pie",
                data: {
                    labels: ["Enrolled Couses", "Completed Courses", "Partial completed"],
                    datasets: [
                        {
                            data: [StudentProgress[0].enrolledCourses, StudentProgress[0].completedCourses, StudentProgress[0].partialCompleted],
                            backgroundColor: [
                                'rgba(255, 99, 132)',
                                'rgb(54, 164, 235)',
                                'rgb(255, 205, 86)',
                            ],
                        }
                    ]
                }
            })
    
            return ()=>{
                if(chartInstance.current) {
                    chartInstance.current.destroy()
                }
            }
        } )

  return (
    <div className='w-full min-h-[100vh] h-full flex flex-col gap-6 text-pure-greys-5 items-center mt-8 mb-8'>

        {/* Articles for parents  */}
        <div className='flex flex-col gap-3 w-[98%]' >
            <h3 className='text-pure-greys-25 font-semibold text-2xl '>Articles</h3>
            <div className='flex flex-row flex-wrap gap-2 bg-richblack-700 justify-center items-center p-4 rounded-lg'>
            {
                Articles.map((article, i) => (
                    <div key={i} className='flex flex-col gap-4 bg-richblack-800 p-1 rounded-md overflow-hidden cursor-pointer justify-start items-center w-[200px] h-[260px]'>
                        <img src={article.img} alt="" className='w-[180px] h-[150px] rounded-md'/>
                        <div className='flex flex-col items-start'>
                            <h3 className='font-semibold text-pure-greys-50'>{article.title}</h3>
                            <p className=' text-pure-greys-5 text-sm'>{article.desc}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>

        {/* recommended videos  */}
        <div className='flex flex-col gap-3 w-[98%]'>
            <h3 className='text-pure-greys-25 font-semibold text-xl '>Recommended Videos</h3>
            <div className='flex flex-row gap-2 bg-richblack-700 justify-center items-center p-4 rounded-lg'>
            {
                VideoDetails.map((video, i) => (
                    <div key={i} className='flex flex-col gap-4 bg-richblack-800 p-1 rounded-md overflow-hidden cursor-pointer justify-start items-center w-[200px] h-[260px]'>
                        <img src={video.img} alt="" className='w-[180px] h-[150px] rounded-md'/>
                        <div className='flex flex-col items-start'>
                            <h3  className='font-semibold text-pure-greys-50'>{video.title}</h3>
                            <p className=' text-pure-greys-5 text-sm'>{video.desc}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>

        {/* student progress report */}
        <div className='flex flex-col gap-3 w-[98%]'>
            <h3 className='text-pure-greys-25 font-semibold text-xl '>Student Progress report</h3>
            <div className='flex flex-row gap-2 bg-richblack-700 justify-evenly items-start p-4 rounded-lg'>
                {/* login  */}
                <div className='bg-richblack-800 p-2 rounded-lg'>
                    <div className='flex flex-col items-center gap-4'>
                        <label htmlFor="" className='w-full'>
                            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
                                User Email Address <sup className='text-pink-200'>*</sup>
                            </p>
                            <input type="email" name="email" placeholder='Enter email' className='rounded-sm'/>
                        </label>

                        <label htmlFor="" className='w-full'>
                            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
                                Password <sup className='text-pink-200'>*</sup>
                            </p>
                            <input type="password" name="password" placeholder='Enter password' className='rounded-sm text-richblack-800'/>
                        </label>

                        <div className='flex gap-3'>
                            <div
                            className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 cursor-pointer'
                            onClick={()=>{setCheckUser("flex")}}
                            >
                            Check
                            </div>

                            <div
                            className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 cursor-pointer'
                            onClick={()=>{setCheckUser("hidden")}}
                            >
                            Reset
                            </div>
                        </div>
                    </div>
                </div>

                {/* student details and progress report */}
                        <div className={`${checkUser} flex-col items-center justify-start gap-8 `} >
                            <h3><b>User name: </b> {StudentProgress[0].name}</h3>
                            <canvas ref={chartRef}/>
                        </div>
            </div>
        </div>

    </div>
  )
}
