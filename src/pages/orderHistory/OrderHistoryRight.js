/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React } from 'react';
import './orderHistoryRight.css';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

function OrderHistoryRight(){
    let orderHistoryDetail = useSelector((state) =>{return state.orderHistoryDetail})

    // 결제 한 총 금액
    let tatalPrice = 
    orderHistoryDetail.length > 0
    ? orderHistoryDetail.map((x)=>{
        return (x.productCount * x.productPrice);
    }).reduce((a, b)=>{// a : 누적 값, b : 현재 값
        // console.log(a, b)
        return (a + b)
    }, 0)
    : 0

    return(
        <div className="orderHistoryRight">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>상세 번호</th>
                        <th>상품 이름</th>
                        <th>수량</th>
                        <th>상품 가격</th>
                        <th>총 금액</th>
                    </tr>    
                </thead>

                <tbody>
                    {
                        // console.log(orderHistoryDetail.length)
                        orderHistoryDetail.length > 0
                        ? 
                        orderHistoryDetail.map((x, i) =>{
                            return(
                                <tr key={i}>
                                    <td>{orderHistoryDetail[i].orderDetailIdx } </td>
                                    <td>{orderHistoryDetail[i].productName } </td>
                                    <td>{orderHistoryDetail[i].productCount } </td>
                                    <td>{orderHistoryDetail[i].productPrice } </td>
                                    <td>{orderHistoryDetail[i].productCount * orderHistoryDetail[i].productPrice } </td>
                                </tr>
                            ); // orderHistoryDetail return END
                        }) // orderHistoryDetail map END

                        : console.log("orderHistoryDetail에 데이터가 없습니다.")
                    }
                </tbody>
            </Table>
                
            <h2>총 결제 금액 : {tatalPrice}</h2>
        </div>
    ); // return END
} // function END

export default OrderHistoryRight;