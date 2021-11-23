import React from "react";

const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex:(index)=>{},
    showEnlargeTab: false,
    setShowEnlargeTab:()=>{}
})

export default GlobalContext;