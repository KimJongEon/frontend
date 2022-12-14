/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ApiTestComponent from './ApiTestComponent';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Order from './pages/order/Order';
import OrderHistory from './pages/orderHistory/OrderHistory';
import MenuManagement from './pages/menuManagement/MenuManagement';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { changeProductList, changeOrderHistory } from './store.js';

function App() {
  let navigate = useNavigate();

  // Redux : store의 state 변경하기 위한 함수 - useDispatch
  let dispatch = useDispatch();

  //useEffect에서 axios로 데이터 가져 오기 성공하면
  //dispatch로 store에 데이터 저장
  //store에 저장한 데이터 꺼내와서 사용하면 됨
  useEffect(() => {

    axios
      .all([axios.get('/api/productList'),
      axios.get('/api/orderHistory')])
      .then(
        axios.spread((productList, orderHistory) => {
          // productList data
          if (productList.data) {
            // 데이터 가져오기 성공하면
            // store.js에 저장하라고 dispatch 사용
            // console.log(productList.data); // 넘어오는지 값 확인
            dispatch(changeProductList(productList.data));
          } else {
            console.log("productList 데이터 없음")
          }

          // orderHistory data
          if (orderHistory.data) {
            console.log(orderHistory.data);
            dispatch(changeOrderHistory(orderHistory.data));
          } else {
            console.log("orderHistory 데이터 없음")
          }
        })
      ) // then END
      .catch(error => {
        console.log("에러 발생")
        console.log(error)
      }) // catch END


  }, []); // useEffect END

  return (
    <div className="App">

      {/* 고정 : Topbar */}
      <Topbar></Topbar>

      {/* 고정 : Left Side bar */}
      <div className="appContainer">
        {/* <Sidebar></Sidebar> */}
        <Sidebar navigate={navigate}></Sidebar>
        {/* <Home></Home> */}

        {/* <div className="others">페이지 내용</div> */}

        <Routes>
          {/* Order 페이지 (홈 페이지, 첫 시작 페이지) */}
          <Route path="/" element={<Order />} />

          {/* OrderHistory 페이지 */}
          <Route path="/orderHistory" element={<OrderHistory />} />

          {/* MenuManagement 페이지 */}
          <Route path="/menuManagement" element={<MenuManagement />} />

        </Routes>

      </div>

      {/* <h2>app.js입니다</h2>
      <ApiTestComponent></ApiTestComponent> */}

    </div>
  );
}


export default App;
