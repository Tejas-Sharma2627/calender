import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import data from "../data";
function Day({ day, rowInd }) {
  const { showEnlargeTab, setShowEnlargeTab } = useContext(GlobalContext);
  const{status, setStatus}=useContext(GlobalContext);
  const{time,setTime}=useContext(GlobalContext);
  
  const handleEnlargeTabEntry = () => {
    setShowEnlargeTab(true);
    setStatus("Entry");
    setTime(day.format("DD-MM-YY")+" "+data[day.format("DD-MM-YY")].Entry);
    console.log(day.format("DD-MM-YY")+" "+data[day.format("DD-MM-YY")].Entry);
    console.log(time);
  };
  const handleEnlargeTabExit = () => {
    setShowEnlargeTab(true);
    setStatus("Exit");
    setTime(day.format("DD-MM-YY")+" "+data[day.format("DD-MM-YY")].Exit);
    console.log(day.format("DD-MM-YY")+" "+data[day.format("DD-MM-YY")].Exit);
    console.log(time);
  };

  return (
    <div className={`border border-gray-200 flex flex-col `}>
      <header className={`flex flex-col items-center `}>
        {rowInd === 0 && (
          <p className="text-sm mt-1 border border-gray-200 flex flex-col">
            {day.format("dddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center ${
            data.hasOwnProperty(day.format("DD-MM-YY")) ||
            "bg-red-600 text-white rounded "
          }`}
        >
          {day.format("DD")}
        </p>
        {data.hasOwnProperty(day.format("DD-MM-YY")) && (
          <div>
            <p
              className="bg-blue-900 text-white rounded text-sm my-1 text-center "
              onClick={handleEnlargeTabEntry}
              style={{cursor:"pointer"}}
            >
              Entry: {data[day.format("DD-MM-YY")].Entry}
            </p>
            <p
              className="bg-blue-900 text-white rounded text-sm my-1 text-center "
              onClick={handleEnlargeTabExit}
              style={{cursor:"pointer"}}
            >
              Exit: {data[day.format("DD-MM-YY")].Exit}
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Day;
