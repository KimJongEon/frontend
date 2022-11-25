/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React } from 'react';
import './menuManagement.css';
import MenuLeft from './MenuLeft.js';
import MenuRight from './MenuRight.js';

function MenuManagement() {
    
    return (
        <div className="menuManagement">
            <MenuLeft></MenuLeft>
            <MenuRight></MenuRight>
        </div>
    ); //return End
}

export default MenuManagement;