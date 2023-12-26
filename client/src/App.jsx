import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/ABout';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/components/Header';

export default function App() { 
  return( <BrowserRouter> 
  {/*header*/}
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
  </Routes>
  </BrowserRouter>
  );
}
