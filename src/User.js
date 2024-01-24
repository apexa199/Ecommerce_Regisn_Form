import React from 'react';
import { Outlet } from 'react-router-dom';

export const User = () => {
  return (
    <div>User
          <div>Menu for the submenu same like w3 school sidem menu</div>

<Outlet />
    </div>
  )
}
