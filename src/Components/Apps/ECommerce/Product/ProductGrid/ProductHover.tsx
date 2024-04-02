import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../../AbstractElements'
import { addCartData } from '../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';
import { ProductDataTypes, ProductHoverProps } from '../../../../../Types/EcommerceType';

export default function ProductHover({ onClickHandle, item }: ProductHoverProps) {
    const dispatch = useDispatch();
    const addToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    };
    return (
        <div className="product-hover">
            <UL className="simple-list flex-row">
                <LI>
                    <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/cart`} onClick={() => addToCart(item)}>
                        <i className="icon-shopping-cart" />
                    </Link>
                </LI>
                <LI>
                    <a color="transparent" onClick={() => onClickHandle(item)} type="button">
                        <i className="icon-eye" />
                    </a>
                </LI>
            </UL>
        </div>
    )
}
