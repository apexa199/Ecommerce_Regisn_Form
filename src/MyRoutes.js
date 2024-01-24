import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Product from './Product';
import { User } from './User';
import { Profile } from './Profile';
import { Account } from './Account';


export const MyRoutes = () => {
    let element = useRoutes([

        { path: "/", element: <Login /> },
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