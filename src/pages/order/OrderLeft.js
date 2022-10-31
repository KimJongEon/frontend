import React from 'react';
import './orderLeft.css';
import { Table } from 'react-bootstrap';

function OrderLeft(){
    return(
        <div className="orderLeft"> 
            <Table>
                <thead>
                    <tr>
                        <th>상품 이름</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>수량X가격 = 총 금액</th>
                    </tr>
                </thead>

                <tbody>
                    {/* 조건문 필요 */}
                    {/* count가 1이상 일때 행 추가 */}
                    {/* 한 번 더 클릭하면 count만 +1 */}
                    
                    <tr>
                        <td>아메리카노</td>
                        <td>1</td>
                        <td>2000</td>
                        <td>2000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ); //return End
}

export default OrderLeft;