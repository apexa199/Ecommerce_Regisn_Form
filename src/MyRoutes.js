import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Product from './Product';
import { User } from './User';
import { Profile } from './Profile';
import { Account } from './Account';
import { useRoutes } from 'react-router-dom';
import RequireAuth from './private/RequireAuth';


const LoginNew = React.lazy(() => import("./Login"));

export const MyRoutes = () => {
    let element = useRoutes([

        { path: "/", element: <LoginNew /> },
        { path: "/signup", element: <Signup /> },
        { path: "/productlist", element: <RequireAuth><Product/>



    
        </RequireAuth> },
        {
          path: "/user",
          element: <User />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            { path: "account",
             element: <Account /> },
          ],
        },
        
      ]);
    
      return element;
}