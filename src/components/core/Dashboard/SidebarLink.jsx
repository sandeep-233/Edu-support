import React from 'react'
import * as Icons from 'react-icons/vsc'
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';
import {resetCourseState} from '../../../slices/courseSlice';

const SidebarLink = ({link, iconName}) => {

    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname);
    }

  return (
    <NavLink
     to={link.path}
     onClick={() => dispatch(resetCourseState())}
     className={`${matchRoute(link.path) ? "bg-yellow-5 border-l-yellow-200 border-l-2" : "bg-opacity-0"}`}
    >
      <div className="flex items-center gap-x-2">
        <Icon className="text-lg" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}

export default SidebarLink
