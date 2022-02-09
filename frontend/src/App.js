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
// import MediaFeed from './components/MediaFeed';
// import SideNav from './components/SideNav';
// import MainPage from './components/MainPage';
// import CreatePost from './components/CreatePost';



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
