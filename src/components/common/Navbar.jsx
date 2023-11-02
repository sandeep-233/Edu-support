import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo/Logo.png'
import {NavbarLinks} from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import {AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { ACCOUNT_TYPE } from '../../utils/constants'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { BsChevronDown } from 'react-icons/bs'




const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);

    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(false);


    useEffect( () => {
        (async() => {
            setLoading(true)
            try{
                const res = await apiConnector("GET", categories.CATEGORIES_API)
                console.log("response category", res);
                setSubLinks(res?.data?.data)
            }
            catch(error) {
                console.log("Could not fetch Categories.", error)
            }
            setLoading(false)
        })()
    },[] )

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div
      className={`flex h-14 w-full items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">

        <Link to="/" className='flex gap-3'>
          <img src={Logo} alt="Logo" width={32} height={32} loading="lazy" className='rounded-full'/>
          <h2 className='text-pure-greys-25 font-semibold text-2xl '>EduSupport</h2>
        </Link>

        <nav className="hidden md:block">
            <ul className="flex gap-x-6 text-richblack-25">
                {
                    NavbarLinks.map((link, index) => (
                        <li key={index}>
                            {
                                link.title === "Catalog" ?
                                (
                                    <>
                                        <div
                                            className={`group relative flex cursor-pointer items-center gap-1 ${
                                                matchRoute("/catalog/:catalogName")
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                            }`}
                                        >
                                        <p>Courses</p>
                                        <BsChevronDown />
                                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                            {loading ? (
                                            <p className="text-center">Loading...</p>
                                            ) : subLinks.length > 0 ? (
                                            <>
                                                {subLinks
                                                ?.map((subLink, i) => (
                                                    <Link
                                                        to={`/catalog/${subLink.name
                                                            .split(" ")
                                                            .join("-")
                                                            .toLowerCase()}`}
                                                        className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                                        key={i}
                                                    >
                                                        <p>{subLink.name}</p>
                                                    </Link>
                                                ))}
                                            </>
                                            )
                                            : (
                                            <p className="text-center">No Courses Found</p>
                                            )}
                                        </div>
                                        </div>
                                    </>
                                )
                                : (
                                    <Link to={link?.path}>
                                        <p
                                        className={`${
                                            matchRoute(link?.path)
                                            ? "text-yellow-25"
                                            : "text-richblack-25"
                                        }`}
                                        >
                                        {link.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>

        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>

        {
          !display && (
            <button className="mr-4 md:hidden" onClick={() => setDisplay(true)}>
              <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
            </button>
          )
        }
        
      </div>
        
        {/* for small screen size  */}
      {
        display && (
          <nav className="flex flex-col gap-4 pt-4 absolute w-[45%] bg-[#000000b0] h-fit pb-4 z-50 right-0 bottom-0 top-0 md:hidden">
            <button className='flex justify-end pr-4' onClick={()=> setDisplay(false)}>
              <AiOutlineClose fontSize={24} fill="#AFB2BF"/>
            </button>
            
            <ul className="flex flex-col gap-6 w-full h-full pt-4 text-richblack-25">
                {
                    NavbarLinks.map((link, index) => (
                        <li key={index}>
                            {
                                link.title === "Catalog" ?
                                (
                                    <>
                                        <div
                                            className={`group relative flex cursor-pointer items-center gap-1 ${
                                                matchRoute("/catalog/:catalogName")
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                            }`}
                                        >
                                        <p>Courses</p>
                                        <BsChevronDown />
                                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-74%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                            {loading ? (
                                            <p className="text-center">Loading...</p>
                                            ) : subLinks.length > 0 ? (
                                            <>
                                                {subLinks
                                                ?.map((subLink, i) => (
                                                    <Link
                                                        to={`/catalog/${subLink.name
                                                            .split(" ")
                                                            .join("-")
                                                            .toLowerCase()}`}
                                                        className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                                        key={i}
                                                    >
                                                        <p>{subLink.name}</p>
                                                    </Link>
                                                ))}
                                            </>
                                            )
                                            : (
                                            <p className="text-center">No Courses Found</p>
                                            )}
                                        </div>
                                        </div>
                                    </>
                                )
                                : (
                                    <Link to={link?.path}>
                                        <p
                                        className={`${
                                            matchRoute(link?.path)
                                            ? "text-yellow-25"
                                            : "text-richblack-25"
                                        }`}
                                        >
                                        {link.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
            </ul>

            {/* Login / Signup / Dashboard */}
            <div className="flex flex-col gap-3 items-center ">
              {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/cart" className="relative">
                  <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                  {totalItems > 0 && (
                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              {token === null && (
                <Link to="/login">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Sign in
                  </button>
                </Link>
              )}
              {token === null && (
                <Link to="/signup">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Sign up
                  </button>
                </Link>
              )}
              {token !== null && <ProfileDropDown />}
            </div>
        </nav>
        )
      }

      </div>
  )
}

export default Navbar
