import React, {useState} from 'react'
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';
export default function ContextWrapper(props) {
    const[monthIndex,setMonthIndex]=React.useState(dayjs().month());
    const[showEnlargeTab, setShowEnlargeTab]=useState(false);
    return (
        <GlobalContext.Provider value={{monthIndex,setMonthIndex,showEnlargeTab,setShowEnlargeTab}}>
        {props.children}
        </GlobalContext.Provider>
    )
}


