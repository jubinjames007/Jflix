import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                    src="https://fontmeme.com/permalink/210324/03055f9f92960e127b294badaf31c091.png"
                    alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
