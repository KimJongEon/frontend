/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌

// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { React, useState } from 'react';
import './orderRight.css';
import { useDispatch, useSelector } from 'react-redux';
import { pushOrderList, changeOrderList } from '../../store.js';

function OrderRight() {

    let orderList = useSelector((state) => { return state.orderList })
    let productList = useSelector((state) => { return state.productList})

    // console.log(test)
    // console.log(props.productList)
    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch()

    return (
        <div className="orderRight">
            <div>
                {
                    productList.map((a, i) => {
                        return (
                            <Button className="productList" variant="primary" key={i} onClick={() => {
                                // orderList 배열 길이가 0이면 데이터가 없으니 데이터 삽입
                                if(orderList.length == 0){
                                    dispatch(pushOrderList({ ...a, count: 1 }))
                                }else{ // orderList 배열 길이가 0이 아니면 데이터 존재

                                    /* findOrderList : orderList productIdx와 선택한 데이터(a.productIdx)와 일치하는 데이터만 반환 */
                                    let findOrderList = orderList.filter(orderListData => orderListData.productIdx == a.productIdx)

                                    /*
                                    findOrderList 배열 길이가 1 -> orderList에 이미 선택한 데이터(a)가 있다는 것
                                    findOrderList 배열 길이가 0 -> orderList에 선택한 데이터(a)가 없다는 것
                                    findOrderList 배열 길이가 0일 때만 데이터 삽입 -> 중복된 데이터 삽입 방지
                                    */
                                    if(findOrderList.length == 0){
                                        dispatch(pushOrderList({ ...a, count: 1 }))
                                    }
                                    
                                    /* 메뉴 클릭시 개수 증가 기능 구현 미정 */
                                    // else if(findOrderList.length == 1){
                                    //     console.log(orderList)
                                    //     // console.log(findOrderList[0].count)
                                    //     // dispatch(changeOrderList() )
                                    // }
                                }
                            }}>
                                {productList[i].productName /*제품 명*/ } <br /> 
                                {productList[i].productPrice /*제품 가격*/ }
                            </Button>
                        ); //map return End
                    })
                }
            </div>
        </div>
    ); //return End
}

export default OrderRight;