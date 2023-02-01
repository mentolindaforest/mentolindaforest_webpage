import React from 'react';
import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    let navLink = {
        textDecoration: "none",
        fontWeight: 300,
        color: "rgb(61, 86, 86)",
        fontFamily: "Montserrat"
    };

    let navLinkActive = {
        textDecoration: "none",
        fontWeight: 900,
        color: "rgb(61, 86, 86)",
        fontFamily: "Montserrat"
    };

    return (
        <div>
            <ul className = {styles.categories}>
                <li>
                    <NavLink end
                        to='/' 
                        style={({ isActive }) =>
                            isActive ? navLinkActive : navLink
                        }
                    >
                        home
                    </NavLink>
                </li>
                <li> 
                    <NavLink end
                        to='/bio'
                        style={({ isActive }) =>
                            isActive ? navLinkActive : navLink
                        }
                    >
                        bio
                    </NavLink>
                </li>
                <li>
                    <NavLink end
                        to='/music'
                        style={({ isActive }) =>
                            isActive ? navLinkActive : navLink
                        }
                    >
                        music
                    </NavLink>
                </li>
                <li>
                    <NavLink end
                        to='/contact'
                        style={({ isActive }) =>
                            isActive ? navLinkActive : navLink
                        }
                    >
                        contact ✍🏻
                    </NavLink>
                </li>
            </ul>
        </div>
        )
}

export default NavBar;