/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌

// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { React } from 'react';
import './OrderRight.css';
import { useDispatch, useSelector } from 'react-redux';
import { pushProductCount } from '../../store.js';

function OrderRight(props) {

    let productCount = useSelector((state) => { return state.productCount })
    

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
                                if (!productCount[i]) { //체크
                                    dispatch(pushProductCount({ ...props.productList[i], count: 1 }))
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