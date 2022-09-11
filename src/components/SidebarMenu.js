import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SidebarLink = styled(Link)`
display:flex;
color:#e1e9fc;
justify-content:space-between;
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:18px;

&:hover{
background:#252831;
border-left:4px solid #623ce4;
currsor:pointer;
}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`
const DroupdownLink = styled(Link)`
background:#414757;
height:60px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:#f5f5f5;
font-size:18px;

&hover{
    background: #632ce4;
    cursor:pointer;
}
`
const SidebarMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subnav && showSubnav}>
                <div>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {
                        item.subNav && subnav
                            ? item.iconOpened : item.subNav
                                ? item.iconClosed
                                : null
                    }
                </div>
            </SidebarLink>
            {
                subnav && item.subNav.map((item, index) => {
                    return (
                        <DroupdownLink to={item.path} key={index}>
                            {item.icon}
                        </DroupdownLink>
                    )

                })
            }
        </>
    );
};

export default SidebarMenu;