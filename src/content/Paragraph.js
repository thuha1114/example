import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Paragraph () {

    const context = useContext(ThemeContext)
    
    return(
        <>
            <i className={context.theme}>This is an example for uses for useContext() in ReactJS.</i>
        </>
    )
}

export default Paragraph;