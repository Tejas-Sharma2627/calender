import React from "react";

function CalenderHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Entry/Exit</h1>
      <button className="material-icons-outlined cursor-pointer text-gray-600 mr-5">
        <span>chevron_left</span>
      </button>
      <button className="material-icons-outlined cursor-pointer text-gray-600 mr-5">
      <span>chevron_right</span>
    </button>
    </header>
  );
}

export default CalenderHeader;
