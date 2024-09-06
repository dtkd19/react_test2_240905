import React from 'react';

const Friend = (props) => {


    const {name,phone,addr,job} =props.frd; 
    return (

        <div className='friend'>
            <h3> {name}({phone})  {addr} {job} </h3>
        </div>
    );
};


export default Friend;