import React, { useState } from 'react';
import './comp.css';
import { Link } from 'react-router-dom';

const Comp3 = () => {
    // 다른 컴포넌트로 데이터를 넘길 때 props 도 있지만,
    // path를 사용하여 데이터를 넘길 수 있음.
    // (1) path variable : /comp3/12 
    // (2) queryString : /comp3?id=12&name=12

        const [id, setId] = useState('');
        const [pw, setPw] = useState('');
      
        const paramInput = (e) => {
            setId(e.target.value);
        }

        const paramInput2 = (e) => {
            setPw(e.target.value);
        }


    return (
        <div className='comp3 comp'>
            <div>Comp3 영역입니다.</div>

            <Link to="/param/15/kim">path variable</Link>

            <br /><br /><br /><hr />

            <Link to={{pathname:'/param/15/kim'}}>path variable param</Link>

            <br /><br /><br /><hr />

            <Link to="/param?num=1&page=15">queryString</Link>
            
            <br /><br /><br /><hr />
            <Link to ={
                {
                    pathname: '/param',
                    search:'?num=18&page=15'
                }
            }>queryString params</Link>

            <br /><br /><br /><hr />

            {/* id/pw 입력받고 전송버튼을 클릭하여 Param3.jsx에 출력 */}
            <input type="text" name='id' onChange={paramInput} />
            <input type="text" name='pw' onChange={paramInput2}/>
            <Link to={`/param3/${id}/${pw}`}>id/pw 전송</Link>


        </div>
    );
};

export default Comp3;