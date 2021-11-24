import React from "react";

const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex:(index)=>{},
    showEnlargeTab: false,
    setShowEnlargeTab:()=>{},
    status:" Entry",
    setStatus:()=>{},
    time:"",
    setTime:()=>{}
})

export default GlobalContext;