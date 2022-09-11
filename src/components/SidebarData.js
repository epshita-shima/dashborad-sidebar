import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChevronDown, faChevronUp, faCoffee, faHome, faUser,faBolt } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: "Overwiew",
        path: '/overview',
        icons: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
        iconClosed: <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>,
        iconOpen: <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>,
        submenu: [
            {
                title: 'Users',
                path: '/overview/users',
                icons: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            }
        ]
    },
    {
        title: "Reports",
        path: '/reports',
        icons: <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>,
        iconClosed: <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>,
        iconOpen: <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>,
        submenu: [
            {
                title: 'Reports 1',
                path: '/overview/reports1',
                icons: <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
            },
            {
                title: 'Reports 2',
                path: '/overview/reports2',
                icons: <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
            }
        ]
    },
    {
        title: "Products",
        path: '/products',
        icons: <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
    }
]
// const SidebarData = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default SidebarData;