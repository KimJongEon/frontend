/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌

// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {React, useState, useEffect} from 'react';
import './OrderRight.css';
import axios from "axios";

function OrderRight(props){

    return(
        <div className="orderRight">
            {/* <div>{props.productListCopy[0].productName}</div> */}
            {/* <div>{console.log(props.productList[0])}</div> */}
            {/* <div>{console.log(props.productList[0].productName)}</div> */}
            {/* <div>{console.log(props.productList[1].productName)}</div> */}
            {/* <div>{console.log(props.productList[2].productName)}</div> */}


            <div>{console.log(props.productList)}</div>
            <div>
                {
                    props.productList.map((a, i) =>{
                        return (
                            <Button variant="primary" key={i}>
                                {props.productList[i].productName} <br/>
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