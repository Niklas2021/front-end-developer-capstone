import "./header.css";
import Nav from "./nav";

function Header() {
    return (
        <div className="header">
            <img src="logo.png" alt="Logo"/>
            <Nav/>
        </div>
    );
}

export default Header;