import { React } from 'react';
import './menuLeft.css';

import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

function MenuLeft() {
    let productList = useSelector((state) => { return state.productList });
    console.log(productList)
    return (
        <div className="menuLeft">
            <Table>
                <thead>
                    <tr>
                        <th>상품 번호</th>
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
                                    <td>{productList[i].productIdx}</td>
                                    <td>{productList[i].productName}</td>
                                    <td>{productList[i].productPrice}</td>
                                    <td>
                                        {/* 메뉴 삭제 버튼 */}
                                        <Button variant="primary">
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