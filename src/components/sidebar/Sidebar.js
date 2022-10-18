import React from 'react';
import './sidebar.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { NavLink, Link } from 'react-router-dom';


function Sidebar(props){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeWorkIcon/>
                            <Link to="/">Home</Link>
                            {/* <Link onClick={()=>{ props.navigate('/') }}>Home</Link> */}
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUpIcon/> 
                            <Link to="/order">Order</Link>
                            {/* <Link onClick={()=>{ props.navigate('/order') }}>Order</Link> */}
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