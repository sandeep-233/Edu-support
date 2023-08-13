import React from 'react'


const statsData = [
    {
        count: "5K",
        label: "Active Students"
    },
    {
        count: "10+",
        label: "Mentors"
    },
    {
        count: "200+",
        label: "Courses"
    },
    {
        count: "50+",
        label: "Awards"
    },
]

const Stats = () => {
  return (
    <section>
        <div className="bg-richblack-700">
            <div className="flex flex-row gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
                {
                    statsData.map((data, index) => (
                        <div key={index} className="flex flex-col py-10">
                            <h1 className="text-[30px] font-bold text-richblack-5">{data.count}</h1>
                            <p className="font-semibold text-[16px] text-richblack-500">{data.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Stats
