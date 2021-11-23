import React, { useState, useContext ,useEffect} from "react";
import "./App.css";
import { getMonth } from "./util";
import CalenderHeader from "./components/CalenderHeader";
import SideBar from "./components/SideBar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
function App() {
  
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const{monthIndex}=useContext(GlobalContext);

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex])
  return (
    <>
      <div className="h-screen flex flex-col p-8">
        <div className="h-screen flex flex-col">
          <CalenderHeader />
          <div className="flex flex-1">
            <SideBar />
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
