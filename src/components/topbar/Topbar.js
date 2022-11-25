import React from 'react';
import './topbar.css';
import { useNavigate} from 'react-router-dom';

function Topbar(){
    let navigate = useNavigate();

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo" onClick={()=>{
                        navigate('/');
                    }}>POS 시스템</span>
                </div>
                
                <div className="topRight"></div>
            </div>
        </div>
    );
}

export default Topbar;