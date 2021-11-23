import React,{useContext} from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
function Day({ day, rowInd }) {
  const{showEnlargeTab, setShowEnlargeTab}=useContext(GlobalContext);
  const handleClick=(e)=>{
    console.log(typeof day.format('DD-MM-YY'));
  }
  const handleEnlargeTab=()=>{
    setShowEnlargeTab(true);
  }
  return (
    
    <div className={`border border-gray-200 flex flex-col `} >
      <header className={`flex flex-col items-center `}>
        {rowInd === 0 && (
          <p className="text-sm mt-1">{day.format("dddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${day.format('DD-MM-YY')===dayjs().format('DD-MM-YY')&&'bg-blue-900 text-white rounded '}`} onClick={handleClick}>{day.format("DD")}</p>
        <p className={`text-sm my-1 text-center ${day.format('DD-MM-YY')===dayjs().format('DD-MM-YY')&&'bg-blue-900 text-white rounded '}`} onClick={handleEnlargeTab}>Entered</p>
        <p className={`text-sm my-1 text-left ${day.format('DD-MM-YY')===dayjs().format('DD-MM-YY')&&'bg-blue-900 text-white rounded '}`} onClick={handleEnlargeTab}>Exit</p>

      </header>
    </div>
  );
}

export default Day;
