import React from 'react'
import { LI, UL } from '../../../../../../../AbstractElements'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../redux-toolkit/store';
import { setColorState } from '../../../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';

export default function ColorsFilter() {
    const { productItem } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();
    const colors = () => {
        let colorData: string[] = [];
        productItem.map((element) => {
            if (element.colors) {
                element.colors.map((item) => {
                    if (colorData.indexOf(item) === -1) {
                        colorData.push(item);
                    }
                });
            }
        });
        return colorData;
    };
    return (
        <div className="color-selector">
            <UL className=" d-flex gap-1 flex-row">
                {colors().map((color, i) => (
                    <LI key={i} className={color} title={color} onClick={() => { dispatch(setColorState(color)) }}></LI>
                ))}
            </UL>
        </div>
    )
}
