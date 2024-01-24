import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import RequireAuth from './private/RequireAuth'
import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CustomHookLink } from './CustomHookLink';
import { MyDisplay } from './MyDisplay';
import { NoFound } from './NoFound';
import { User } from './User';
import { Profile } from './Profile';
import { Account } from './Account';
import { MyRoutes } from './MyRoutes';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
    <div>Entire commen things</div>

    <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Suspense fallback={<div>Loading</div>}></Suspense>

<MyRoutes/>

<CustomHookLink to='/'>Login</CustomHookLink>
{/* 
  <NavLink to="/"
            style={({ isActive }) =>
              isActive ? {
                    color: '#fff',
                    background: 'blue',
                  }
                : { color: 'white', background: 'red' }}
          >MyPage
            </NavLink>

            
    <Routes>

    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/mydisplay" element={<MyDisplay/>} />
    <Route path="/productlist" element={<RequireAuth><Product/>
    
      </RequireAuth>}/>


       <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>

    <Route path='*' element={<NoFound/>}/>

    </Routes> */}

    </BrowserRouter>
  );
}

export default App;
