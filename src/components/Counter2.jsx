import React from 'react';
import { useReducer } from 'react';


const reducer = (state,action) => {
    switch(action.type) {
        case 'INCREMENT' : 
            return state + 1 ;
        case 'DECREMENT' :
            return state - 1 ;
        default :
            return state;
    }
}

const Counter2 = () => {

    const [ state, dispatch ] = useReducer( reducer , 0 ); 
    
    const decrement = () => {
        dispatch({type : 'DECREMENT' });
    }

    return (
        <div className='counter2'>
                    <h1>{state}</h1>
                    <button onClick={() => { dispatch({type : 'INCREMENT' }) }}>+</button>
                    <button onClick={decrement}>-</button>

        </div>
    );
};

export default Counter2;