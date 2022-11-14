/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React, useState, useEffect } from 'react';
import OrderRight from './OrderRight';
import OrderLeft from './OrderLeft';
import './order.css';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { changeProductList } from '../../store.js';


function Order() {
    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch();

    //useEffect에서 axios로 데이터 가져 오기 성공하면
    //dispatch로 store에 데이터 저장
    //store에 저장한 데이터 꺼내와서 사용하면 됨
    useEffect(() => {
        axios.get('/api/productList')
            .then(res => {
                if (res.data) {
                    // 데이터 가져오기 성공하면
                    // store.js에 저장하라고 dispatch 사용

                    // console.log(res.data); // 넘어오는지 값 확인
                    dispatch(changeProductList(res.data));

                } else {
                    console.log("nono")
                }
            })
    }, []);

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