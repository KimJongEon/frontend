/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React, useState } from 'react';
import './orderLeft.css';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { pushOrderList, changeOrderList, changeOrderHistory } from './../../store.js';
import axios from 'axios';


function OrderLeft() {
    let orderList = useSelector((state) => { return state.orderList });

    // 총 결제 금액
    let totalPrice = orderList.map((x) => {
        return (x.count * x.productPrice);
    }).reduce((a, b) => { // a : 누적 값, b : 현재 값
        // console.log(a, b)
        return (a + b)
    }, 0); // 0은 초기값

    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch();


    return (
        <>
            <div className="orderLeft">
                <Table className="orderListTable" striped bordered hover>
                    <thead>
                        <tr>
                            <th>상품 이름</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>총 금액</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* 조건문 필요 */}
                        {/* count가 1이상 일때 행 추가 */}
                        {/* 한 번 더 클릭하면 count만 +1 */}

                        {/* map 반복문 사용 */}
                        {
                            orderList.map((x, i) => {
                                return (
                                    <tr key={i}>
                                        {/* {console.log(orderList[i])} */}
                                        <td>{orderList[i].productName}</td>
                                        <td>
                                            {/* 수량 마이너스 버튼 */}
                                            <Button variant="danger" onClick={() => {
                                                let productIdx = orderList[i].productIdx
                                                let orderListData = orderList[i].count

                                                if (orderListData > 1) {
                                                    let orderListUpdate = orderList.map((x) =>
                                                        x.productIdx === productIdx
                                                            ? { ...x, count: orderListData -= 1 }
                                                            : x
                                                    )
                                                    dispatch(changeOrderList(orderListUpdate))
                                                }
                                            }}>-</Button>

                                            {/* 수량 */}
                                            &nbsp;&nbsp;{orderList[i].count}&nbsp;&nbsp;

                                            {/* 수량 플러스 버튼 */}
                                            <Button variant="primary" onClick={() => {
                                                let productIdx = orderList[i].productIdx
                                                let orderListData = orderList[i].count

                                                let orderListUpdate = orderList.map((x) =>
                                                    // console.log({...x})
                                                    x.productIdx === productIdx
                                                        ? { ...x, count: orderListData += 1 }
                                                        : x
                                                )
                                                dispatch(changeOrderList(orderListUpdate))
                                            }}>+</Button>
                                        </td>

                                        {/* 상품 금액 */}
                                        <td>{orderList[i].productPrice}</td>

                                        {/* 상품 총 금액 */}
                                        <td>{(orderList[i].count * orderList[i].productPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                    </tr>
                                ); //return END
                            })
                        }
                    </tbody>
                </Table>

                <div className="totalPriceDiv">
                    <h2>총 결제 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h2>
                </div>


                {/* 현금 결제 버튼 */}
                <Button className="paymentCash" onClick={() => {
                    let orderListCopy = Object.values({ ...orderList });
                    console.log(orderListCopy)
                    console.log(totalPrice)
                    if (confirm("'현금결제'로주문완료 하시겠습니까?")) {
                        //true
                        axios.post(
                            "/api/payment" + "/" + "cash",
                            // "/api/paymentCash", // url 주소
                            orderListCopy // 보낼 데이터
                        )
                            .then(res => {
                                console.log(res)
                                if (res.data == 1) {
                                    alert("주문이 완료 되었습니다.");
                                    dispatch(changeOrderList([]))

                                    axios.get('/api/orderHistory')
                                        .then(orderHistory => {

                                            if (orderHistory.data) {
                                                console.log(orderHistory.data);
                                                dispatch(changeOrderHistory(orderHistory.data));
                                            } else {
                                                console.log("orderHistory 데이터 없음")
                                            }
                                        }).catch(error => {
                                            console.log("orderHistory API 에러 발생")
                                            console.log(error)
                                        }) // catch END

                                } else {
                                    alert("주문 실패");
                                }
                            })
                            .catch(error => {
                                console.log(error);
                                alert("에러");
                            })
                    } else {
                        //false
                        console.log("주문 취소")
                    }
                }}>현금 결제</Button>

                {/* 카드 결제 버튼 */}
                <Button className="paymentCard" variant="success" onClick={() => {
                    let orderListCopy = Object.values({ ...orderList });
                    console.log(orderListCopy)
                    console.log(totalPrice)

                    if (confirm("'카드결제'로주문완료 하시겠습니까?")) {
                        //true
                        axios.post(
                            "/api/payment" + "/" + "card",
                            // "/api/paymentCash", // url 주소
                            orderListCopy // 보낼 데이터
                        )
                            .then(res => {
                                console.log(res)
                                if (res.data == 1) {
                                    alert("주문이 완료 되었습니다.");
                                    dispatch(changeOrderList([]))

                                    axios.get('/api/orderHistory')
                                        .then(orderHistory => {

                                            if (orderHistory.data) {
                                                console.log(orderHistory.data);
                                                dispatch(changeOrderHistory(orderHistory.data));
                                            } else {
                                                console.log("orderHistory 데이터 없음")
                                            }
                                        }).catch(error => {
                                            console.log("orderHistory API 에러 발생")
                                            console.log(error)
                                        }) // catch END

                                } else {
                                    alert("주문 실패");
                                }
                            })
                            .catch(error => {
                                console.log(error);
                                alert("에러");
                            })
                    } else {
                        //false
                        console.log("주문 취소")
                    }
                }}>카드 결제</Button>

                <Button className="orderRefresh" variant="danger" onClick={() => {
                    dispatch(changeOrderList([]))
                }}>주문 초기화</Button>
            </div>
        </>
    ); //return End
}

export default OrderLeft;