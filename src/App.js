import React, { useState, useContext ,useEffect} from "react";
import "./App.css";
import { getMonth } from "./util";
import CalenderHeader from "./components/CalenderHeader";
import Month from "./components/Month";
import EnlargeTab from "./components/EnlargeTab";
import GlobalContext from "./context/GlobalContext";
function App() {
  
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const{monthIndex}=useContext(GlobalContext);
  const{showEnlargeTab}=useContext(GlobalContext);
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex])
  return (
    <>
    {showEnlargeTab&&<EnlargeTab></EnlargeTab>}
    
        <div className="h-screen flex flex-col  ">
          <CalenderHeader />
          <div className="flex flex-1">
            <Month month={currenMonth} />
          </div>
        </div>
      
    </>
  );
}

export default App;
