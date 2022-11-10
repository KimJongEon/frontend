/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌

// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { React, useState } from 'react';
import './OrderRight.css';
import { useDispatch, useSelector } from 'react-redux';
import { pushProductCount } from '../../store.js';

function OrderRight(props) {

    let productCount = useSelector((state) => { return state.productCount })
    let [productCountCk, setProductCountCk] = useState();

    // Redux : store의 state 변경하기 위한 함수 - useDispatch
    let dispatch = useDispatch()

    return (
        <div className="orderRight">

            {/* <div>{console.log(props.productList)}</div> */}

            <div>
                {
                    props.productList.map((a, i) => {
                        return (
                            <Button variant="primary" key={i} onClick={() => {
                                // productCount 배열 길이가 0이면 데이터가 없으니 데이터 삽입
                                if(productCount.length == 0){
                                    dispatch(pushProductCount({ ...a, count: 1 }))
                                }else{ // productCount 배열 길이가 0이 아니면 데이터 존재
                                    
                                    /* findProductCount : productCount productIdx와 선택한 데이터(a.productIdx)와 일치하는 데이터만 반환 */
                                    let findProductCount = productCount.filter(productCountData => productCountData.productIdx == a.productIdx)

                                    /*
                                    findProductCount 배열 길이가 1 -> productCount에 이미 선택한 데이터(a)가 있다는 것
                                    findProductCount 배열 길이가 0 -> productCount에 선택한 데이터(a)가 없다는 것
                                    findProductCount 배열 길이가 0일 때만 데이터 삽입 -> 중복된 데이터 삽입 방지
                                    */
                                    if(findProductCount.length == 0){
                                        dispatch(pushProductCount({ ...a, count: 1 }))
                                    }
                                }
                            }}>
                                {props.productList[i].productName} <br />
                                {props.productList[i].productPrice}
                            </Button>
                        ); //map return End
                    })
                }
            </div>
        </div>
    ); //return End
}

export default OrderRight;