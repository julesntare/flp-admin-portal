import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { useSelector } from 'react-redux';
import { H3, LI, P, UL } from '../../../../../AbstractElements'
import { RootState } from '../../../../../redux-toolkit/store';
import { Dollar, WomenPinkShirt } from '../../../../../Utils/Constants';
import ProductPageWidth from './ProductPageWidth';
import SocialIcons from './SocialIcons';
import StarRating from './StarRating';
import ButtonLinks from './ButtonLinks';

export default function ProductDetails() {
    const productData = useSelector((state: RootState) => state.product.productItem);
    const product = productData[0];
    const products = {
        price: productData[0]?.price,
        discountPrice: productData[0]?.discountPrice,
    };
    
    return (
        <Col xxl={5} className='box-col-6 order-xxl-0 order-1'>
            <Card>
                <CardBody>
                    <div className='product-page-details'>
                        <H3>{WomenPinkShirt}</H3>
                    </div>
                    <div className='product-price'>
                        {Dollar}{products.price}
                        <del>{Dollar}{products.discountPrice}</del>
                    </div>
                    <UL className='product-color simple-list flex-row'>
                        <LI className='bg-primary'></LI>
                        <LI className='bg-secondary'></LI>
                        <LI className='bg-success'></LI>
                        <LI className='bg-info'></LI>
                        <LI className='bg-warning'></LI>
                    </UL>
                    <hr />
                    <P>{'Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.'}</P>
                    <hr />
                    <ProductPageWidth /><hr />
                    <SocialIcons /><hr />
                    <StarRating /><hr />
                    <ButtonLinks product={product}/>
                </CardBody>
            </Card>
        </Col>
    )
}
