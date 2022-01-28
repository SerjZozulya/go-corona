import logo from "../../img/logo.svg";
import React from "react";

const Header = () => {
    return <header className={"header"}>
        <div className={"header_container"}>
            <a href={""} className={"header_logo"}>
                <img src={logo} alt={"Логотип"}/>
            </a>
            <nav className={"menu"}>
                <ul className={"menu_list"}>
                    <li className={"menu_item"}><a href={""} className={"menu_link"}>HOME</a></li>
                    <li className={"menu_item"}><a href={""} className={"menu_link"}>FEATURES</a></li>
                    <li className={"menu_item"}><a href={""} className={"menu_link"}>SUPPORT</a></li>
                    <li className={"menu_item"}><a href={""} className={"menu_link"}>CONTACT US</a></li>
                </ul>
            </nav>
            <div className={"header_button"}>
                <a href={""} className={"button"}>DOWNLOAD</a>
            </div>

        </div>
    </header>
}

export default Header