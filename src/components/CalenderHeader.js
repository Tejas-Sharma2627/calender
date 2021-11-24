import React,{useContext} from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import { CSVLink, CSVDownload } from "react-csv";
import data from '../data'
function CalenderHeader() {
    const{monthIndex, setMonthIndex}=useContext(GlobalContext);
    const handlePrevMonth=()=>{
        setMonthIndex(monthIndex-1);
    }
    const handleNextMonth=()=>{
        setMonthIndex(monthIndex+1);
    }
    const handleInput=(e)=>{
      const ch = e.target.value.substring(5,8);
      console.log(parseInt(ch));
      setMonthIndex(parseInt(ch)-1);
    }
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Entry/Exit</h1>
      <button className="material-icons-outlined cursor-pointer text-gray-600 mr-5" onClick={handlePrevMonth}>
        <span>chevron_left</span>
      </button>
      <button className="material-icons-outlined cursor-pointer text-gray-600 mr-5" onClick={handleNextMonth}>
      <span>chevron_right</span>
    </button>
    <h1 className="mr-10 text-xl text-gray-500 font-bold">{dayjs(new Date(dayjs().year(), monthIndex)).format(
      "MMMM YYYY"
    )}</h1>
    <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="month" placeholder="" aria-label="month" onChange={handleInput}/>
  </div>
</form>
<button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-blue-500 rounded">

</button>
    </header>
  );
}

export default CalenderHeader;
