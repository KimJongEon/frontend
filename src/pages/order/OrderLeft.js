/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import React from 'react';
import './orderLeft.css';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { pushProductCount, changeProductCount } from '../../store.js';


function OrderLeft() {

    let productCount = useSelector((state) => { return state.productCount })

    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch()

    return (
        <div className="orderLeft">
            {/* {console.log(productCount)} */}
            <Table>
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
                        productCount.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{productCount[i].productName}</td>
                                    <td>
                                        {/* 수량 마이너스 버튼 */}
                                        <Button variant="primary" onClick={() => {

                                            let productIdx = productCount[i].productIdx
                                            let productCountData = productCount[i].count

                                            if (productCountData > 1) {
                                                let productCountUpdate = productCount.map((x) =>
                                                    // console.log({...x})

                                                    x.productIdx === productIdx
                                                        ? { ...x, count: productCountData -= 1 }
                                                        : x
                                                )
                                                dispatch(changeProductCount(productCountUpdate))
                                            }
                                        }}>-</Button>

                                        {/* 수량 */}
                                        {productCount[i].count}

                                        {/* 수량 플러스 버튼 */}
                                        <Button variant="primary" onClick={() => {
                                            let productIdx = productCount[i].productIdx
                                            let productCountData = productCount[i].count

                                            let productCountUpdate = productCount.map((x) =>
                                                // console.log({...x})
                                                x.productIdx === productIdx
                                                    ? { ...x, count: productCountData += 1 }
                                                    : x
                                            )
                                            dispatch(changeProductCount(productCountUpdate))
                                        }}>+</Button>
                                    </td>
                                    
                                    {/* 상품 금액 */}
                                    <td>{productCount[i].productPrice}</td>

                                    {/* 상품 총 금액 */}
                                    <td>{productCount[i].count * productCount[i].productPrice}</td>
                                    
                                </tr>
                            ); //return END
                        })
                    }
                </tbody>
            </Table>
        </div>
    ); //return End
}

export default OrderLeft;