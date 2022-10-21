import React from 'react';
import OrderRight from './OrderRight';
import OrderLeft from './OrderLeft';
import './order.css';


function Order(){
    return (
        <div className="order">
            <OrderLeft></OrderLeft>
            <OrderRight></OrderRight>
        </div>
    ); // return End
}

export default Order;