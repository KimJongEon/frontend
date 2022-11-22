import { React } from 'react';
import './menuRight.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function MenuRight() {
    return (
        <div className="menuRight">
            <Form>
                <Form.Group className="mb-3" controlId="productNameInsert">
                    <Form.Label>상품 이름</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productPriceInsert">
                    <Form.Label>상품 가격</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>

                {/* 상품 추가 버튼 : submit */}

                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>

        </div>
    );// END
}

export default MenuRight;