import {  createContext, useState } from "react";

export const loginContext = createContext()

const Loginprovider =({children})=>{
    const [loginResopnse,setLoginResponse] = useState('')

    return(
        <loginContext.Provider value={{loginResopnse,setLoginResponse}}>
            {children}
        </loginContext.Provider>
    )
}
export default Loginprovider