import React from 'react';
import { friends } from '../data/data';
import Friend from './Friend';
import './comp.css';
const Comp1 = () => {
    return (
        <div className='comp1 comp' style={{width : '500px' , margin : '50px auto'}}>
            <h3>친구 목록 리스트</h3>
            {/* 친구목록 표시 */

                friends.map(f => (
                    <Friend frd ={f} />
                ))

            }   
            <table style={{width : '100%'}}>
                <thead>
                    <tr>
                    <th>이름</th>
                    <th>번호</th>
                    <th>주소</th>
                    <th>직업</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        friends.map(f => (

                    <tr>
                    <td>{f.name}</td>
                    <td>{f.phone}</td>
                    <td>{f.addr}</td>
                    <td>{f.job}</td>
                    </tr>

                        ))
                    }
                </tbody>
                </table>
        </div>
    );
};

export default Comp1;