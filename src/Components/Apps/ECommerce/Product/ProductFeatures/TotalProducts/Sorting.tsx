import React, { ChangeEvent } from 'react'
import { Col, Input } from 'reactstrap'
import { useDispatch } from 'react-redux';
import { Featured, HighestPrices, LowestPrices, ShowingProducts } from '../../../../../../Utils/Constants'
import { sortBy } from '../../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';

export default function Sorting() {
    const dispatch = useDispatch();
    const filterSort = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(sortBy(event.target.value));
    };

    return (
        <Col md={6} className="text-sm-end">
            <span className="m-r-5"> {ShowingProducts}</span>
            <div className="select2-drpdwn-product select-options d-inline-block">
                <select  className="form-control btn-square" name="select">
                    <option value="opt1">{Featured}</option>
                    <option value="opt2">{LowestPrices}</option>
                    <option value="opt3">{HighestPrices}</option>
                </select>
            </div>
        </Col>
    )
}
