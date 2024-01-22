import Content from "./content/Content";
import { useContext } from "react";
import { ThemeContext } from "./content/ThemeProvider";

//Uses for useContext()
// 1. Create Context
// 2. Provider
// 3. Consumer

//Component cha dùng createContext, component con dùng useContext

function UContenxt () {

    const context = useContext(ThemeContext)
    return(
        <>
            <button onClick={context.toggleTheme}>Toggle Theme</button><br></br>
            <Content />
        </>
    )
}

export default UContenxt;