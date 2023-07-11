import React from "react";
import Logo from "../img/harmonyHub.png";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo"  />
                </div>
            </div>
        </div>
    )
}
export default Navbar