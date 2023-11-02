import React from 'react'
import {Articles} from '../data/demoParentsData-articles'
import {VideoDetails} from '../data/demoParentsData-videos'
import {StudentProgress} from '../data/demoParentsData-studentProgess'


export const Parents = () => {
  return (
    <div className='w-full min-h-[100vh] h-full flex flex-col gap-6 text-pure-greys-5 items-center mt-8'>

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
            <div className='flex flex-row gap-2 bg-richblack-700 justify-center items-center p-4 rounded-lg'>

            </div>
        </div>

    </div>
  )
}
