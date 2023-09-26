import React, { useState, useEffect } from "react";
import './Headerss.css';

export default () => {
    const [headerDark, setHeaderDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderDark(true);
            } else {
                setHeaderDark(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
       <header className={`header ${headerDark ? "dark" : ""}`}>
            <div className="logo">
                 <a href="https://raulcordeiro.com.br">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix" /> <h3 className="Raul">Raul Cordeiro Tecnologias</h3>
                </a>
            </div>

            <div className="logouser">
                <a href="/">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=110,fit=crop,q=95/mv05X3M4eMULJWW5/320221569_569592824604190_8943829775768663230_n-mv05X309yzSlODLG.jpg" alt="logouser" />
                </a>
            </div> 


                    

       </header>
       
       
    )
}
