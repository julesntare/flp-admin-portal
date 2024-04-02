import React, { useState } from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Btn, H3 } from '../../../../../../AbstractElements'
import { AddToCart, Quantity, ViewDetails } from '../../../../../../Utils/Constants'
import { addCartData } from '../../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer'
import { ProductQuantityProp } from '../../../../../../Types/EcommerceType'

export default function ProductQuantity({dataId, modelData}: ProductQuantityProp) {
    const [cartCount, setCartCount] = useState(1);
    const dispatch = useDispatch();
    const incrementCount = () => {
        setCartCount(cartCount + 1);
    };
    const decrementCount = () => {
        if (cartCount === 1) {
            return;
        } else {
            setCartCount(cartCount - 1);
        }
    };
    const handleAddToCart = () => {
        dispatch(addCartData({ id: dataId, item: modelData, increment: cartCount }));
    };
    return (
        <div className="product-qnty">
            <H3>{Quantity}</H3>
            <fieldset>
                <InputGroup>
                    <Btn color="primary" className="btn-square bootstrap-touchspin-down" onClick={decrementCount}>
                        <i className="fa fa-minus"></i>
                    </Btn>
                    <InputGroupText className="bootstrap-touchspin-prefix d-none"></InputGroupText>
                    <Input className="touchspin text-center" type="text" name="quantity" value={cartCount} />
                    <Btn color="primary" className="btn-square bootstrap-touchspin-up" onClick={incrementCount}>
                        <i className="fa fa-plus"></i>
                    </Btn>
                </InputGroup>
            </fieldset>
            <div className="addcart-btn mt-3">
                <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`} className='btn btn-primary me-3' onClick={handleAddToCart}>
                    {AddToCart}
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product-page`} className='btn btn-primary ms-2'>
                    {ViewDetails}
                </Link>
            </div>
        </div>
    )
}
