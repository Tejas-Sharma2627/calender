import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
function EnlargeTab() {
  const { showEnlargeTab, setShowEnlargeTab } = useContext(GlobalContext);
  const { status, setStatus } = useContext(GlobalContext);
  const { time, setTime } = useContext(GlobalContext);
  const handleClick = () => {
    setShowEnlargeTab(false);
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center bg-blue-900">
          <span className="bg-blue-900 text-white rounded text-sm text-xl my-1 text-center ">
            {status}
          </span>
          <button onClick={handleClick}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="flex">
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <span className="mr-10 text-xl flex">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnlargeTab;
