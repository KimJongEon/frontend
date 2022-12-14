/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import React from 'react';
import './sidebar.css';
import { BsFillBasket3Fill, BsListUl, BsArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">주문 및 관리</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BsFillBasket3Fill />
                            <Link to="/">주문</Link>
                            {/* <Link onClick={()=>{ props.navigate('/') }}>Home</Link> */}
                        </li>

                        <li className="sidebarListItem">
                            <BsListUl />
                            <Link to="/orderHistory">주문내역</Link>
                            {/* <Link onClick={()=>{ props.navigate('/order') }}>Order</Link> */}
                        </li>

                        <li className="sidebarListItem">
                            <BsArrowRightSquareFill />
                            <Link to="/menuManagement">메뉴관리</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div> // sidebar End
    ); // return End
}

export default Sidebar;