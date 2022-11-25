/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import { React } from 'react';
import './menuLeft.css';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductList } from '../../store.js';
import Button from 'react-bootstrap/Button';

function MenuLeft() {
    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch();
    let productList = useSelector((state) => { return state.productList });

    return (
        <div className="menuLeft">
            <Table className="productListTable" striped bordered>
                <thead>
                    <tr>
                        {/* <th>상품 번호</th> */}
                        <th>이름</th>
                        <th>가격</th>
                        <th>버튼</th>
                    </tr>
                </thead>

                <tbody>
                    {/* 삼항 연산자 사용 */}
                    {productList.length !== 0 // 조건문
                        ? productList.map((x, i) => { // ? -> true 일 때
                            return (
                                <tr key={i}>
                                    {/* <td>{productList[i].productIdx}</td> */}
                                    <td>{productList[i].productName}</td>
                                    <td>{(productList[i].productPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                    <td>
                                        {/* 메뉴 삭제 버튼 */}
                                        <Button variant="danger" onClick={() => {
                                            if (confirm("정말 삭제하시겠습니까?")) {
                                                //true
                                                let productIdxCopy = productList[i].productIdx
                                                axios.post(
                                                    "/api/deletionProduct" + "/" + productIdxCopy
                                                )
                                                    .then(res => {
                                                        if (res.data) { // 결과가 true
                                                            dispatch(changeProductList(res.data))
                                                        }
                                                    })
                                            } else { // false

                                            }



                                        }}>
                                            삭제
                                        </Button>
                                    </td>
                                </tr>
                            ); // map return END
                        }) // map END
                        : null // : -> false 일 때
                    }
                </tbody>
            </Table>


        </div>
    );// END
}

export default MenuLeft;