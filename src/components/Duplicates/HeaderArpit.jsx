/*Purpose: The Header.jsx component implements a dynamic navigation bar for the GDG Frontend application. It features a responsive design with the GDG logo, 
a dropdown navigation menu system, and user authentication elements (login button and avatar). Using React's useState and useRef hooks, it manages hover states 
for dropdown menus and their positioning. The component includes navigation items for Home, About us, Events, Project, and Our Team, each with nested dropdown options 
for UI/UX, Development, and Design. The navigation is styled using a dedicated CSS file (FeedbackPage.css) and provides interactive hover effects and dropdown functionality 
while maintaining a consistent visual appearance aligned with the GDG brand identity.*/

/*Contributor: Arpit Makkar (23BCE7565)*/
import React, { useState, useRef } from "react";
import logo from "../assets/gdglogo.png";
import avatar from "../assets/avatar.png";
import "../styles/FeedbackPage.css";

const items = [
    {
        name: "Home",
        items: ["UI/UX", "Development", "Design"],
    },
    {
        name: "About us",
        items: ["UI/UX", "Development", "Design"],
    },
    {
        name: "Events",
        items: ["UI/UX", "Development", "Design"],
    },
    {
        name: "Project",
        items: ["UI/UX", "Development", "Design"],
    },
    {
        name: "Our Team",
        items: ["UI/UX", "Development", "Design"],
    },
];

const Link = ({ item, activeItem, onHover}) => {
    const linkRef = useRef();

    const handleHover = () => {
        const rect = linkRef.current.getBoundingClientRect();
        onHover(item, rect.x); 
    };

    const handleMouseLeave = () => {
        onHover(null, 0);
    };

    return (
        <div 
            className="nav-item"
            ref={linkRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <a className={item?.name === activeItem?.name ? "active" : ""}>
                {item.name}
            </a>
            {item === activeItem && (
                <div className="navbar-dropdown visible">
                    {item.items.map((link) => (
                        <a key={link}>{link}</a>
                    ))}
                </div>
            )}
        </div>    
    );
};

const Header = () => {
 const [activeItem, setActiveItem] = useState(null);
 
     const handleLinkHover = (item) => {
         setActiveItem(item);
     };
 
     return (
         <nav className="navbar">
             <img className="logo" src={logo}/>
             
             <div className="right-container">
                 <div className="navbar-menu">
                     {items.map((item, index) => (
                         <Link
                             key={index}
                             activeItem={activeItem}
                             item={item}
                             onHover={handleLinkHover}
                         />  
                     ))}
                 </div>
 
                 <button className="login-btn">Login</button>
 
                 <img className="avatar" src={avatar} />
 
             </div>
             
             
         </nav>
     );
}

export default Header
