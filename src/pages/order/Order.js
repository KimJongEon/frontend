/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React } from 'react';
import OrderRight from './OrderRight';
import OrderLeft from './OrderLeft';
import './order.css';

function Order() {
    return (
        <div className="order">
            <OrderLeft></OrderLeft>
            <OrderRight></OrderRight>
            {/* productList가 undefined가 아니면 실행 -> 삼항연산자 이용 */}
            {/* {
                productList !== undefined ? <OrderRight productList={productList} ></OrderRight> : null
            } */}
        </div>
    ); // return End
}

export default Order;