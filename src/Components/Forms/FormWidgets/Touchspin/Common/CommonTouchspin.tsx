import React, { useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import { TouchspinProp } from '../../../../../Types/FormType';

export default function CommonTouchspin({ color, arrowIcon,outline,btnClass }: TouchspinProp) {
    const [touchspinValue, setTouchspinValue] = useState(Math.floor(Math.random() * 10));

    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }
    
    return (
        <div className="touchspin-wrapper">
            <Btn onClick={decrementHandle} color={color} outline={outline} className={`me-1 decrement-touchspin btn-touchspin ${btnClass}`}>
                {arrowIcon ? <i className="fa fa-angle-left"/> : <i className="fa fa-minus"/>}
            </Btn>
            <input className={`me-1 input-touchspin spin-outline-${color}`} type="number" value={touchspinValue} readOnly />
            <Btn onClick={incrementHandle} color={color} outline={outline} className={`increment-touchspin btn-touchspin ${btnClass}`}>
                {arrowIcon ? <i className="fa fa-angle-right"/> : <i className="fa fa-plus"/>}
            </Btn>
        </div>
    )
}
