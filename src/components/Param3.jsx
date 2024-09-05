import React from 'react';
import './comp.css';
import { useParams } from 'react-router-dom';

const Param3 = () => {

    const { id , pw } = useParams(); 

    return (
        <div className='param3 comp'>
            <div> Param3 영역입니다.</div>
            <h3> id : {id} , pw : {pw} </h3>
        </div>
    );
};

export default Param3;