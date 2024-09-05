import React, { useState } from 'react';

const Color = () => {

    // input 값으로 색을 입력하고 버튼을 누르면 해당 색으로 변경하는 useState 생성

    const [inputColor , setInputColor] = useState("");

    const [btnColor , setBtnColor] = useState("");

    const colorInput = (e) => {
     setInputColor(e.target.value);
    }

    const colorBtn = () => {
        setBtnColor(inputColor);
    }


    return (
        <div className='color'>
            <h3 style={{color : btnColor}}>Color Change Example</h3>
            <input type="color" name='text' value={inputColor} onChange={colorInput} />
            <button onClick={colorBtn}>Change</button>
        </div>
    );
};

export default Color;