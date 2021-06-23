import React from 'react'

export default function Header() {

    const myFunction = () => {
        const dropD = document.getElementById('topnav');
        if (dropD.className === "topnav-right") {
            dropD.className += " responsive";
        } else {
            dropD.className = "topnav-right";
        }
    }

    return (
        <nav>
            <div className="topnav-left">
                <a href="#" className="btpc">LOGO</a>
            </div>
            <div className="topnav-right" id="topnav">
                <a href="#" type="button" className="sparisci">ABOUT</a>
                <a href="#" type="button" className="sparisci"> CONTACT</a>
                <a href="#" type="button" className="sparisci"> LOG IN</a>
                <a href="#" type="button" className="sparisci"> SIGN IN</a>
                <a href="#"
                   id="btn-mobile"
                   type="button"
                   onClick={(event) => {
                       event.preventDefault();
                       myFunction();
                   }}
                >MENU</a>
            </div>
        </nav>
    );
}
