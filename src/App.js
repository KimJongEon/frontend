import './App.css';
import ApiTestComponent from './ApiTestComponent';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="App">

      {/* 고정 : Topbar */}
      <Topbar></Topbar>

      {/* 고정 : Left Side bar */}
      <div className="container">
        <Sidebar></Sidebar>
        <div className="others">페이지 내용</div>
        
      </div>

      <h2>app.js입니다</h2>
      <ApiTestComponent></ApiTestComponent>

    </div>
  );
}


export default App;
