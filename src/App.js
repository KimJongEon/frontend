import './App.css';
import ApiTestComponent from './ApiTestComponent';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Order from './pages/order/Order'
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
          {/* home 페이지 */}
          <Route path="/" element={<Home/>} />

          {/* Order 페이지 */}
          <Route path="/order" element={<Order/>} />
        </Routes>

      </div>

      <h2>app.js입니다</h2>
      <ApiTestComponent></ApiTestComponent>

    </div>
  );
}


export default App;
