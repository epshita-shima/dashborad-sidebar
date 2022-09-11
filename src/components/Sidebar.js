import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import SidebarMenu from './SidebarMenu';
const Nav = styled.div`
background:#15171c;
display:flex;
justify-conetent:flex-start;
align-items:center;
`;

const NavIcon = styled(Link)`
margin-left:2rem;
font-size:2rem;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
`;

const SidebarNav = styled.nav`
background:#15171c;
width:250px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
left:${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10;
`;

const SidebarWarp = styled.div`
width:100%;
`
const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWarp>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}></AiIcons.AiOutlineClose>
                    </NavIcon>
                    {
                        SidebarData.map((item, index) => {
                            return <SidebarMenu
                                item={item}
                                key={index}
                            ></SidebarMenu>
                        })
                    }
                </SidebarWarp>
            </SidebarNav>
        </>
    );
};

export default Sidebar;