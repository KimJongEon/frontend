/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React } from 'react';
import './orderHistoryLeft.css';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeOrderHistoryDetail } from './../../store.js';


function OrderHistoryLeft() {
    let orderHistory = useSelector((state) => { return state.orderHistory })
    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch();
    return (
        <div className="orderHistoryLeft">
            <Table className="orderHistoryLeftTable" striped bordered hover>
                <thead>
                    <tr>
                        <th>주문 일시</th>
                        <th>주문 번호</th>
                        <th>결제 방법</th>
                        <th>총 결제 금액</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        orderHistory.map((x, i) => {
                            return (
                                <tr key={i}
                                    onClick={() => {
                                        let orderIdx = orderHistory[i].orderIdx;
                                        // console.log(orderIdx);
                                        // console.log(typeof (orderIdx));
                                        axios.get(
                                            '/api/orderHistoryDetail', // url 주소
                                            { params: { "orderIdx": orderIdx } } // 보낼 데이터

                                        )
                                            .then((orderHistoryDetail) => {
                                                // console.log(orderHistoryDetail.data) // 받은 데이터 확인
                                                dispatch(changeOrderHistoryDetail(orderHistoryDetail.data))

                                            })
                                            .catch(error => {
                                                console.log("에러 발생")
                                                console.log(error)
                                            })
                                    }}
                                >
                                    <td>{orderHistory[i].orderDate}</td>
                                    <td>{orderHistory[i].orderIdx}</td>
                                    <td>{orderHistory[i].paymentType == 'card'
                                        ? '카드'
                                        : (orderHistory[i].paymentType == 'cash'
                                            ? '현금'
                                            : null
                                        )
                                    }</td>
                                    <td>{orderHistory[i].orderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                    
                                </tr>
                            ); // orderHistory return END
                        })
                    }
                </tbody>

            </Table>

        </div>

    ); // return END
} // function END

export default OrderHistoryLeft;