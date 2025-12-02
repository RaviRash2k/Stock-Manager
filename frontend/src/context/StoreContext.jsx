import { createContext, useState } from "react";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

    const [productPopup, setProductPopup] = useState("no");

    const contextValue = {
        setProductPopup, productPopup
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;