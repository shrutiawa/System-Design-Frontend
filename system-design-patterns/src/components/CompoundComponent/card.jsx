import { createContext, useContext } from "react"

const Context = createContext(null);

const Header = ({ children }) => {
    const { text } = useContext(Context);
    return <div style={{ backgroundColor: "red", color: "white" }}>
        {children}
        {text}
    </div>

}
const Footer = ({ children }) => {
    const { text } = useContext(Context);
    return <div style={{ backgroundColor: "green", color: "white" }}>
        {children}
        {text}
    </div>

}
const Body = ({ children }) => {
    return <div style={{ backgroundColor: "blue", color: "black" }}>
        {children}
    </div>

}
const Card = ({ children }) => { //children may be header body(content) and footer
    return (
        <Context.Provider value={{text : "Hello I am the change th "}}>
            <div style={{ backgroundColor: "yellow" }}>
                {children}
            </div>
        </Context.Provider>
    )
};
export default Card;

Card.Header = Header
Card.Footer = Footer
Card.Body = Body