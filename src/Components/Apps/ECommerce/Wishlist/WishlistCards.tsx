import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, RootState } from '../../../../redux-toolkit/store';
import { ProductDataTypes } from '../../../../Types/EcommerceType';
import { addCartData, fetchProductData } from '../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';
import { Dollar, Href, MoveToCart, Price } from '../../../../Utils/Constants';

export default function WishlistCards() {
    const navigate = useNavigate();
    const productItem = useSelector((state: RootState) => state.product.productItem);
    const dispatch = useDispatch<AppDispatch>();
    const moveToCart = (product: ProductDataTypes) => {
        dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
        navigate(`${process.env.PUBLIC_URL}/applications/ecommerce/cart`);
    };
    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    return (
        <Row className='g-sm-4 g-3'>
            {productItem.map((item) => (
                <Col xl={4} md={6} key={item.id}>
                    <div className="prooduct-details-box">
                        <div className="d-flex">
                            <Image className="align-self-center img-fluid img-60" src={dynamicImage(item.image)} alt="#" />
                            <div className="flex-grow-1 ms-3">
                                <div className="product-name">
                                    <H6><a href={Href}>{item.name}</a></H6>
                                </div>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    {Price}
                                    <span>: {item.price}{Dollar}</span>
                                </div>
                                <div className="avaiabilty">
                                    <div className="text-success">{item.stock}</div>
                                </div>
                                <Btn color="primary" size="xs" onClick={() => moveToCart(item)}>
                                    {MoveToCart}
                                </Btn>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
