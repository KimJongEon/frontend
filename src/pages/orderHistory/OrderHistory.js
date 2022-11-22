/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import React from 'react';
import './orderHistory.css';
import OrderHistoryRight from './OrderHistoryRight.js';
import OrderHistoryLeft from './OrderHistoryLeft.js';

function OrderHistory(){
    return(
        <div className="orderHistory">
            <OrderHistoryLeft></OrderHistoryLeft>
            <OrderHistoryRight></OrderHistoryRight>
        </div>
    ); // return End
}

export default OrderHistory;