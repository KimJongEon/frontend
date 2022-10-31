/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React, useState, useEffect } from 'react';
import OrderRight from './OrderRight';
import OrderLeft from './OrderLeft';
import './order.css';

import axios from "axios";


function Order() {
    let [productList, setProductList] = useState();
    let [productCount, setProductCount] = useState();

    //useEffect에서 axios로 데이터 가져 오기 성공하면
    //dispatch로 store에 데이터 저장
    //store에 저장한 데이터 꺼내와서 사용하면 됨
    useEffect(() => {
        axios.get('/api/test2')
            .then(res => {
                if (res.data) {
                    // console.log(res.data); // 넘어오는지 값 확인
                    setProductList(res.data);
                } else {
                    console.log("nono")
                }
            })
    }, []);

    return (

        <div className="order">
            <OrderLeft productCount={productCount}></OrderLeft>
            {/* {
                productList !== undefined && console.log(productList)
            } */}

            {/* productList가 undefined가 아니면 실행 -> 삼항연산자 이용 */}
            {
                productList !== undefined ? <OrderRight productList={productList} productCount={productCount} ></OrderRight> : null
            }


        </div>
    ); // return End
}

export default Order;