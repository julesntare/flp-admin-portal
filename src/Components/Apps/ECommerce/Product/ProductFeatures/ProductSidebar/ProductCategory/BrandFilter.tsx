import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from 'reactstrap'
import { RootState } from '../../../../../../../redux-toolkit/store';
import { deleteBrandState, filterBrandState } from '../../../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';

export default function BrandFilter() {
    const { productItem, filterValue } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();
    const brands = () => {
        let brandData: string[] = [];
        productItem.map((element) => {
            if (element.tags) {
                element.tags.map((item) => {
                    if (brandData.indexOf(item) === -1) {
                        brandData.push(item);
                    }
                });
            }
        });
        return brandData;
    };
    const filterBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(filterBrandState({ brandChecked: e.target.value }));
        } else {
            dispatch(deleteBrandState({ brandUnChecked: e.target.value }));
        }
    };
    return (
        <div className="checkbox-animated mt-0">
            {brands().map((item, index) => (
                <Label className="d-block" key={index}>
                    <Input className="checkbox_animated" defaultChecked={filterValue.brand.includes(item) ? true : false} value={item} id={item} onChange={filterBrand} type="checkbox" />
                    {item}
                </Label>
            ))}
        </div>
    )
}
