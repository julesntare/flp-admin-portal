import React from 'react'
import { Btn, H3, LI, P, UL } from '../../../../../../AbstractElements'
import { Dollar, ProductDetails } from '../../../../../../Utils/Constants'
import { productSize } from '../../../../../../Data/AppsData/EcommerceData/ProductData'
import { ModalProductDetailsProp } from '../../../../../../Types/EcommerceType'

export default function ModalProductDetails({modelData}: ModalProductDetailsProp) {
    return (
        <>
            <H3>{modelData?.name}</H3>
            <div className="product-price">
                {Dollar} {modelData?.discountPrice}
                <del>
                    {Dollar} {modelData?.price}
                </del>
            </div>
            <div className="product-view">
                <H3>{ProductDetails}</H3>
                <P className="mb-0">{modelData?.discription}</P>
            </div>
            <div className="product-size">
                <UL className="simple-list flex-row">
                    {productSize.map((items: string, i: number) => (
                        <LI key={i} className="me-2">
                            <Btn color="light" outline>{items}</Btn>
                        </LI>
                    ))}
                </UL>
            </div>
        </>
    )
}
