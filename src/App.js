import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SignUp } from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import UserInterface from "./Pages/UserInterface";
import Private from "./Pages/Private";
import MobileNav from "./Components/MobileNav";




function App() {

  return (
    <div className="App font-body bg-neutral-800 dark:bg-white transition-colors duration-200  ">
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/homechat" element={<UserInterface />} />
        </Route> 
      </Routes>
    </div>
  );
}

export default App;

