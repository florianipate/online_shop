import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-menu-item.style.scss';

const DirectoryMenuItem = ({title, history, linkUrl, match}) => (
    <div className="menu-inner" onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        <h5>{title}</h5>  
    </div>
);

export default withRouter(DirectoryMenuItem);