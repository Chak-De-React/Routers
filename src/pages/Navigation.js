
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {


    return (
        <div style={{backgroundColor: "tomato"}}> 
             <NavLink to="/" className="link"> Home </NavLink> 
             <NavLink to="/about" className="link"> About </NavLink>
             <NavLink to="/contact" className="link"> Contact </NavLink>
             <NavLink to="/blog" className="link"> Blog </NavLink>
             
        </div>
    )
}

export default Navigation;



{/* <div style={{backgroundColor: "tomato"}}>
            <a href="/" style={{marginRight: "10px"}}>Home</a>
            <a href="/about" style={{marginRight: "10px"}}>About</a>
            <a href="/contact" style={{marginRight: "10px"}}>Contact</a>
            <a href="/blog" style={{marginRight: "10px"}}>Blog</a>

        </div> */}