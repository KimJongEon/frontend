import './App.css';
import ApiTestComponent from './ApiTestComponent';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Order from './pages/order/Order';
import OrderList from './pages/orderList/OrderList';
import MenuManagement from './pages/menuManagement/MenuManagement';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* 고정 : Topbar */}
      <Topbar></Topbar>

      {/* 고정 : Left Side bar */}
      <div className="container">
        {/* <Sidebar></Sidebar> */}
        <Sidebar navigate={navigate}></Sidebar>
        {/* <Home></Home> */}

        {/* <div className="others">페이지 내용</div> */}
        
        <Routes>
          {/* Order 페이지 (홈 페이지, 첫 시작 페이지) */}
          <Route path="/" element={<Order/>} />

          {/* OrderList 페이지 */}
          <Route path="/orderList" element={<OrderList/>} />

          {/* MenuManagement 페이지 */}
          <Route path="/menuManagement" element={<MenuManagement/>} />

        </Routes>

      </div>

      <h2>app.js입니다</h2>
      <ApiTestComponent></ApiTestComponent>

    </div>
  );
}


export default App;
