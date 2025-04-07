import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterLinks({ title, links }) {
  return (
    <div className="relative md:absolute md:right-60 md:top-5">
      <p className="text-gray-400 text-xs">{title}</p>
      {links.map((link, index) => (
        <p key={index}>
          <NavLink to={link.path} className="text-xs text-center">
            {link.label}
          </NavLink>
        </p>
      ))}
    </div>
  );
}

export default FooterLinks;
