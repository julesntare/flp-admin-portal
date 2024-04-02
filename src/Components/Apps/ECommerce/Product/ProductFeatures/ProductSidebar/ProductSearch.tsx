import React from 'react'
import { useDispatch } from 'react-redux';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { setSearchInput } from '../../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';

export default function ProductSearch() {
    const dispatch = useDispatch();
    const handleSearchKeyword = (e: { target: { value: string } }) => {
        dispatch(setSearchInput(e.target.value));
    };
    return (
        <Col md={9} sm={12}>
            <Form>
                <div className="m-0 form-group">
                    <Input
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => handleSearchKeyword}
                    />
                    <i className="fa fa-search"></i>
                </div>
            </Form>
        </Col>
    )
}
