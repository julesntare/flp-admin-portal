import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Btn } from '../../../../../AbstractElements'
import { AddToCart, AddToWishList, BuyNow } from '../../../../../Utils/Constants';
import { addCartData } from '../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';
import { ProductDataTypes } from '../../../../../Types/EcommerceType';

export default function ButtonLinks({ product }: { product: ProductDataTypes }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="m-t-15 btn-showcase">
            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`} onClick={addToCart}>
                <Btn color="primary">
                    <i className="fa fa-shopping-basket me-1"></i> {AddToCart}
                </Btn>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/checkout`}>
                <Btn color="success">
                    <i className="fa fa-shopping-cart me-1"></i> {BuyNow}
                </Btn>
            </Link>
            <Btn color="secondary" onClick={() => navigate(`${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`)}>
                <i className="fa fa-heart me-1"></i> {AddToWishList}
            </Btn>
        </div>
    )
}
