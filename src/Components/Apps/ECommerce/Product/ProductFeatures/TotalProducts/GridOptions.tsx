import React from 'react'
import { useDispatch } from 'react-redux';
import { LI, UL } from '../../../../../../AbstractElements'
import { Href } from '../../../../../../Utils/Constants'
import { gridOptionsData } from '../../../../../../Data/AppsData/EcommerceData/ProductData';
import { changeColumnClass } from '../../../../../../redux-toolkit/reducers/EcommerceReducer/FilterReducer';

export default function GridOptions() {
    const dispatch = useDispatch();
    const handleColumnClass = (name: string) => {
        dispatch(changeColumnClass(name));
    };
    return (
        <div className="grid-options d-inline-block">
            <UL className='simple-list'>
                {gridOptionsData.map((item, index) => (
                    <LI key={index}>
                        <a className="product-2-layout-view" onClick={() => handleColumnClass(item.colClass)} href={Href} >
                            {item.gridLine.map((line, i) => (
                                <span key={i} className={`line-grid line-grid-${line} bg-primary`}></span>
                            ))}
                        </a>
                    </LI>
                ))}
            </UL>
        </div>
    )
}
