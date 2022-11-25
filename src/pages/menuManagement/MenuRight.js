/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import axios from "axios";
import { React, useRef } from 'react';
import './menuRight.css';
import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { changeProductList } from '../../store.js';
import { useDispatch, useSelector } from 'react-redux';

function MenuRight() {
    let productNameRef = useRef(null);
    let productPriceRef = useRef(null);

    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch();


    return (
        <div className="menuRight">

            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">상품 이름</InputGroup.Text>
                    <Form.Control
                        ref={productNameRef} // Ref 사용
                        placeholder="상품 이름"
                        aria-label="상품 이름"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3 productPrice">
                    <InputGroup.Text id="basic-addon1">상품 가격</InputGroup.Text>
                    <Form.Control
                        ref={productPriceRef} // Ref 사용
                        placeholder="상품 가격"
                        aria-label="상품 가격"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Button className="productAddButton" onClick={() => {
                    console.log(productNameRef.current.value)
                    console.log(productPriceRef.current.value)
                    let editedProductList = {
                        "productName": productNameRef.current.value,
                        "productPrice": productPriceRef.current.value
                    }

                    axios.post(
                        '/api/registrationProduct', // url 주소
                        editedProductList // 보낼 데이터
                    )
                        .then( res => {
                            if(res.data){ // 결과가 true
                                dispatch(changeProductList(res.data))
                            }
                        })

                    console.log(editedProductList)
                }}
                > 추가 </Button>
            </div>
        </div>
    );// END
}

export default MenuRight;