import { useEffect, createContext,useReducer, useContext } from 'react';
import './App.css';
// import FirstPage from './components/FirstPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import MainPage from './Components/MainPage';
import Donate from './Components/Donate';
import About from './Components/About';


const Routing =()=>{
  return(
  <Routes>
          <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="mainpage" element={<MainPage />}>
            </Route>
            <Route path="signin" element={<SignIn />}>
            </Route>
            <Route path="signup" element={<SignUp />}>
            </Route>
            <Route path="donate" element={<Donate />}>
            </Route>
            <Route path="about" element={<About />}>
            </Route>
  </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
          <Routing/>
      </Router >
    </div >
  );
}

export default App;
