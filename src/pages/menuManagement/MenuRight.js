import { React } from 'react';
import './menuRight.css';
import Button from 'react-bootstrap/Button';

function MenuRight() {
    return (
        <div className="menuRight">

            {/* 메뉴 추가 버튼 */}
            <Button variant="primary">
                추가
            </Button>

        </div>
    );// END
}

export default MenuRight;