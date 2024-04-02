import React from 'react'
import { Input, InputGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { XCircle } from 'react-feather';
import { RootState } from '../../../../../redux-toolkit/store';
import { Btn, H6, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Apply, CheckOut, ContinueShopping, Dollar, Href, TotalPrice } from '../../../../../Utils/Constants';
import { decrementCart, incrementCart, removeFromCart } from '../../../../../redux-toolkit/reducers/EcommerceReducer/ProductReducer';
import { ProductDataTypes } from '../../../../../Types/EcommerceType';

export default function CartTableBody() {
    const dispatch = useDispatch();
    const { cartData } = useSelector((state: RootState) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    return (
        <tbody>
            {cartData.map((item, i) => {
                return (
                    item.quantity && (
                        <tr key={i}>
                            <td>
                                <Image className="img-fluid img-40" src={dynamicImage(item.image)} alt="#" />
                            </td>
                            <td>
                                <div className="product-name">
                                    <a href={Href}>{item.name}</a>
                                </div>
                            </td>
                            <td>{Dollar}{item.price}</td>
                            <td className="qty-box">
                                <InputGroup>
                                    <span className="input-group-prepend">
                                        <Btn color="primary" className="bootstrap-touchspin-down" onClick={() => dispatch(decrementCart(i))}>
                                            <i className="fa fa-minus"></i>
                                        </Btn>
                                    </span>
                                    <Input type="number" value={item.quantity} readOnly={true} className="input-touchspin text-center" />
                                    <span className="input-group-append">
                                        <Btn color="primary" className="bootstrap-touchspin-up" onClick={() => dispatch(incrementCart(i))}>
                                            <i className="fa fa-plus"></i>
                                        </Btn>
                                    </span>
                                </InputGroup>
                            </td>
                            <td> <a href={Href}> <XCircle onClick={() => dispatch(removeFromCart(item.id))}/></a></td>
                            <td> {Dollar}{item.price * item.quantity}</td>
                        </tr>
                    )
                );
            })}
            <tr>
                <td colSpan={4}>
                    <InputGroup>
                        <Input className="me-2" type="text" placeholder="Enter coupon code" />
                        <Btn color="primary"> {Apply}</Btn>
                    </InputGroup>
                </td>
                <td className="total-amount">
                    <H6 className="m-0 text-end">
                        <span className="f-w-600">{TotalPrice} :</span>
                    </H6>
                </td>
                <td><span className="f-w-600">{Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span></td>
            </tr>
            <tr>
                <td className="text-end" colSpan={5}>
                    <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product`} className="btn btn-secondary cart-btn-transform">
                        {ContinueShopping}
                    </Link>
                </td>
                <td>
                    <Link className="btn btn-success cart-btn-transform" to={`${process.env.PUBLIC_URL}/applications/ecommerce/checkout`}>
                        {CheckOut}
                    </Link>
                </td>
            </tr>
        </tbody>
    )
}
