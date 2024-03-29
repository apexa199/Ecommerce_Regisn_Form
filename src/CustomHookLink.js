import React from 'react'
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

export const CustomHookLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname });
    console.log(resolved);
    console.log(to);
    console.log(match);
 return (
    <div>

<Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
       
        </div>
  )
}