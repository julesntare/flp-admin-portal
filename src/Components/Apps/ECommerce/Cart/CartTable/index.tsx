import React from 'react'
import { useSelector } from 'react-redux';
import { Row, Table } from 'reactstrap'
import { RootState } from '../../../../../redux-toolkit/store';
import EmptyCart from './EmptyCart';
import { cartTableHead } from '../../../../../Data/AppsData/EcommerceData/PricingData';
import CartTableBody from './CartTableBody';

export default function CartTable() {
    const { cartData } = useSelector((state: RootState) => state.product);

    return (
        <Row>
            {cartData && cartData.length > 0 ? (
                <div className="order-history table-responsive custom-scrollbar custom-scrollbar wishlist">
                    <Table bordered>
                        <thead>
                            <tr>
                                {cartTableHead.map((items, i) => (
                                    <th key={i}>{items}</th>
                                ))}
                            </tr>
                        </thead>
                        <CartTableBody />
                    </Table>
                </div>
            ) :
                (<EmptyCart />)
            }
        </Row>
    )
}
