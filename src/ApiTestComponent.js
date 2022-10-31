/* eslint-disable */ // 터미널에 경고 메세지 안뜨게 해줌
import React, {useState} from 'react';
import axios from "axios";

const ApiTestComponent = () => {
    const [text, setText] = useState('');
    const onClickEnter = () => {
        axios.get('/api/test2')
            .then(res => {
                if (res.data !== undefined) {
                    setText(res.data);
                }
            })
            .catch((e) => {
                console.log(e);
            })
    };

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            {/* <h1>{console.log({text})}</h1> */}
        </div>
    );
};

export default ApiTestComponent;