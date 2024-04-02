import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../redux-toolkit/store';
import { MAX, MIN, STEP } from '../../../../../../../Utils/Constants';
import { setPrizeRange } from '../../../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';

export default function PriceRange() {
    const dispatch = useDispatch();
    const { filterValue } = useSelector((state: RootState) => state.product);
    const [values, setValues] = useState([150, 650]);
    const priceHandle = (values: number[]) => {
        setValues(values);
        dispatch(setPrizeRange(values));
    };

    return (
        <Range
            values={[filterValue.value.min, filterValue.value.max]}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => { priceHandle(values); }}
            renderTrack={({ props, children }) => (
                <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className='range-track'>
                    <output className='price-range-output'>{filterValue.value.min}</output>
                    <div ref={props.ref} className='range-track-bar' style={{ background: getTrackBackground({ values, colors: ["#ccc", "#26695c", "#ccc"], min: MIN, max: MAX })}}>
                        {children}
                    </div>
                    <output className='price-range-output'>{filterValue.value.max}</output>
                </div>
            )}
            renderThumb={({ props }) => <div {...props} className='price-range-thumb'></div>}
        />
    )
}
