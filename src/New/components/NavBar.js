import React , { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import logo from '../logo/logo-nav.webp'
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineRight } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';

const NavBar = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
  

    return (

   
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>


            <div className="container"> 
                <div id="site-header-inner">
           <div className="header__logo">
                        <NavLink to="/"><img src={logo} /></NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">
                        <li><Link className="hover-underline-animation"  smooth to="#home">Home</Link></li>
                        <li><Link className="hover-underline-animation" smooth to="#about">About</Link></li>
                        <li><Link className="hover-underline-animation" smooth to="#cards">Cards</Link></li>
                        <li><Link smooth to="#testimonial">Testimonial</Link></li>
                        <li><Link smooth to="#facts">Facts</Link></li>
                      
                        
                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;