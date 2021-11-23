import React from "react";
import dayjs from "dayjs";
function Day({ day, rowInd }) {
  const handleClick=(e)=>{
    console.log(typeof day.format('DD-MM-YY'));
  }
  return (
    
    <div className={`border border-gray-200 flex flex-col ${day.format('DD-MM-YY')===dayjs().format('DD-MM-YY')&&'bg-blue-900 text-white '}`}>
      <header className={`flex flex-col items-center `}>
        {rowInd === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center`} onClick={handleClick}>{day.format("DD")}</p>
      </header>
    </div>
  );
}

export default Day;
