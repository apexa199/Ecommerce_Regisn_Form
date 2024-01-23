import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import RequireAuth from './private/RequireAuth'
import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom';

import { CustomHookLink } from './CustomHookLink';

function App() {
  return (
    <BrowserRouter>

<CustomHookLink to='/'>Login</CustomHookLink>

  <NavLink to="/"
            style={({ isActive }) =>
              isActive ? {
                    color: '#fff',
                    background: 'blue',
                  }
                : { color: 'white', background: 'red' }
            }
          >MyPage
            </NavLink>

    <Routes>

    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/productlist" element={<RequireAuth><Product/>
    
      </RequireAuth>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
