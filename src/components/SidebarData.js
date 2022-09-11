import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: "Overwiew",
        path: '/overview',
        icons: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
        iconClosed: <RiIcons.RiArrowDownFill></RiIcons.RiArrowDownFill>,
        iconOpen: <RiIcons.RiArrowUpFill></RiIcons.RiArrowUpFill>,
        submenu: [
            {
                title: 'Users',
                path: '/overview/users',
                icons: <IoIcons.IoIosPaper></IoIcons.IoIosPaper>
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icons: <IoIcons.IoIosPaper></IoIcons.IoIosPaper>
            }
        ]
    },
    {
        title: "Reports",
        path: '/reports',
        icons: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
        iconClosed: <RiIcons.RiArrowDownFill></RiIcons.RiArrowDownFill>,
        iconOpen: <RiIcons.RiArrowUpFill></RiIcons.RiArrowUpFill>,
        submenu: [
            {
                title: 'Reports 1',
                path: '/overview/reports1',
                icons: <IoIcons.IoIosPaper></IoIcons.IoIosPaper>
            },
            {
                title: 'Reports 2',
                path: '/overview/reports2',
                icons: <IoIcons.IoIosPaper></IoIcons.IoIosPaper>
            }
        ]
    },
    {
        title: "Products",
        path: '/products',
        icons: <FaIcons.FaCartPlus></FaIcons.FaCartPlus>
    }
]
// const SidebarData = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default SidebarData;