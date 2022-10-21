import React from 'react';
import './topbar.css';

function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">POS 시스템</span>
                </div>
                
                <div className="topRight">Topbar right</div>
            </div>
        </div>
    );
}

export default Topbar;