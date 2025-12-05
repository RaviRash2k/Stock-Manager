import { useEffect } from "react";
import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    
    const url = "http://localhost:3000";
    const [token, setToken] = useState("");
    const [productPopup, setProductPopup] = useState("no");

    useEffect(()=>{
        if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }
    },[])


    const contextValue = {
        setProductPopup, productPopup, setToken, url
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;