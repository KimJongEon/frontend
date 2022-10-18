import React from 'react';
import './sidebar.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeWorkIcon/> 아이템1
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUpIcon/> 아이템2
                        </li>

                        <li className="sidebarListItem">
                            <MonetizationOnIcon/> 아이템3
                        </li>

                    </ul>
                </div>
            </div>
        </div> // sidebar End
    ); // return End
}

export default Sidebar;