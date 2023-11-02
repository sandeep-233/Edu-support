import React from 'react'
import  {FooterLink2}  from '../../data/footer-links';

import Logo from '../../assets/Logo/Logo.png';
import { Link } from 'react-router-dom';

import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";


const BottomFooter = ['Privacy Plicy', 'Cookie Policy', 'Terms'];
const Resources =[
  'Articles',
  'Blog',
  'Chart Sheet',
  'Code challenges',
  'Docs',
  'Projects',
  'Videos',
  'Workspaces',
];
const Plans = ['Paid memberships', 'For students', 'Business solutions'];
const Community = ['Forums', 'Chapters', 'Events'];


const Footer = () => {
  return (
    <div className='bg-richblack-800 w-full'>
      <div className="flex lg:flex-row gap-8 items-center justify-center max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b  w-11/12 flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <div className='flex gap-2 items-center'>
                <img src={Logo} className='object-contain rounded-full' alt="" width={32} height={32}  />
                <p className='text-richblack-5 font-semibold'>EduSupport</p>
              </div>

              <h1 className='text-richblack-50 font-semibold text-[16px] '>
                Company
              </h1>

              <div className='flex flex-col gap-2'>
                {
                  ["About", "Careers", "Affiliates"].map((element, index) => {
                    return(
                      <div
                      key={index}
                      className='text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 '
                      >
                        <Link to={element.toLowerCase()}>{element}</Link>
                      </div>
                    );
                  })
                }
              </div>

              <div className='flex gap-3 text-lg'>
                <FaFacebook className='hover:text-blue-5 cursor-pointer'/>
                <FaGoogle className='hover:text-blue-5 cursor-pointer' />
                <FaTwitter className='hover:text-blue-5 cursor-pointer' />
                <FaYoutube className='hover:text-blue-5 cursor-pointer' />
              </div>
            </div>

          
            {/* Resources and Support section  */}
            <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0 '>
                <h1 className='text-richblack-50 font-semibold text--[16px] '>
                  Resources
                </h1>
                <div className=' flex flex-col gap-2 mt-2 '>
                  {
                    Resources.map((element, index) => {
                      return (
                        <div
                        key={index}
                        className='text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 '
                        >
                          <Link to={element.split(" ").join("-").toLocaleLowerCase()}>
                            {element}
                          </Link>
                        </div>
                      );
                    })
                  }
                </div>

                <h1 className='text-richblack-50 font-semibold text--[16px] mt-7 '>
                  Support
                </h1>
                <div className='text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 '>
                  <Link to={"/help-center"}>
                    Help Center 
                  </Link>
                </div>  

            </div>

            {/* Plan and Community  */}
            <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0 '>
                <h1 className='text-richblack-50 font-semibold text--[16px] '>
                  Plans
                </h1>
                <div className=' flex flex-col gap-2 mt-2 '>
                  {
                    Plans.map((element, index) => {
                      return (
                        <div
                        key={index}
                        className='text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 '
                        >
                          <Link to={element.split(" ").join("-").toLocaleLowerCase()}>
                            {element}
                          </Link>
                        </div>
                      );
                    })
                  }
                </div>

                <h1 className='text-richblack-50 font-semibold text--[16px] mt-7 '>
                  Community
                </h1>
                <div className=' flex flex-col gap-2 mt-2 '>
                  {
                    Community.map((element, index) => {
                      return (
                        <div
                        key={index}
                        className='text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 '
                        >
                          <Link to={element.split(" ").join("-").toLocaleLowerCase()}>
                            {element}
                          </Link>
                        </div>
                      );
                    })
                  }
                </div>  
                            
            </div>

          </div>


          {/* section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {
              FooterLink2.map((element, index) => {
                return(
                  <div key={index}>
                    <h1>
                      {element.title}
                    </h1>
                    <div>
                      {
                        element.links.map((link, index) => {
                          return(
                            <div
                              key={index}
                              className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                            >
                              <Link to={link.link} >
                                {link.title}
                              </Link>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        {/* section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
            <div className='flex flex-row'>
              {
                BottomFooter.map((element, index) => {
                  return(
                    <div
                     key={index}
                     className={
                      `${
                        BottomFooter.length -1 === index
                        ? ""
                        : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      } px-3 `
                     }
                    >
                      <Link to={element.split(" ").join("-").toLowerCase()} >
                        {element}
                      </Link>
                    </div>
                  )
                })
              }

            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
