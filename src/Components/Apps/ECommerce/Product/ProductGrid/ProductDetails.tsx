import React from 'react'
import { Link } from 'react-router-dom'
import { H4, P } from '../../../../../AbstractElements'
import { Dollar } from '../../../../../Utils/Constants'
import { ProductDetailsProps } from '../../../../../Types/EcommerceType'

export default function ProductDetails({item}: ProductDetailsProps) {
    return (
        <div className="product-details">
            <div className="rating">
                <i className="fa fa-star font-warning"></i>
                <i className="fa fa-star font-warning"></i>
                <i className="fa fa-star font-warning"></i>
                <i className="fa fa-star font-warning"></i>
                <i className="fa fa-star font-warning"></i>
            </div>
            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product-page/${item.id}`}>
                <H4>{item.name}</H4>
            </Link>
            <P>{item.note}</P>
            <div className="product-price">
                {Dollar} {item.price}
                <del>
                    {Dollar} {item.discountPrice}
                </del>
            </div>
        </div>
    )
}
