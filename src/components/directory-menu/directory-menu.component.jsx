import React from 'react';
import './directory-menu.style.scss';

const DirectoryMenu = ({children}) => (
    <div className="menu-banner">
        {children}
    </div>
);
export default DirectoryMenu;