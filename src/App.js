import React, { useState } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalenderHeader from "./components/CalenderHeader";
import SideBar from "./components/SideBar";
import Month from "./components/Month";
function App() {
  console.table(getMonth());
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
      <div className="h-screen flex flex-col">
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
