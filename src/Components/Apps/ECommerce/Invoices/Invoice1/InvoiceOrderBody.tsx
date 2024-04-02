import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-toolkit/store';
import { Dollar } from '../../../../../Utils/Constants';
import { ProductDataTypes } from '../../../../../Types/EcommerceType';

export default function InvoiceOrderBody() {
    const { cartData } = useSelector((state: RootState) => state.product);
    const getCartTotal = (item: ProductDataTypes) => {
        if (item.quantity) {
            return item.quantity * item.price;
        }
        return 0;
    };
    const tax = 5;
    const getallCardTotal = (cartItems: ProductDataTypes[]) => {
        let total = 0;
        for (var i = 0; i < cartItems.length; i++) {
            const itemQuantity = cartItems[i].quantity;
            const itemPrice = cartItems[i].price;
            if (itemQuantity !== undefined) {
                const items = itemQuantity * itemPrice;
                total = total + items;
            }
        }
        return total;
    };
    return (
        <>
            {cartData &&
                cartData.map((item) => (
                    <tr style={{ boxShadow: "0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)", borderRadius: "5.47059px" }} key={item.id}>
                        <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ minWidth: 7, height: 7, border: "4px solid var(--theme-default)", background: "#fff", borderRadius: "100%", display: "inline-block" }} />
                            <span>{item.name}</span>
                        </td>
                        <td style={{ padding: "18px 15px" }}><span>{Dollar} {item.price}</span></td>
                        <td style={{ padding: "18px 15px" }}><span>{item.quantity}</span></td>
                        <td style={{ padding: "18px 15px", textAlign: "right" }}><span> {item.quantity !== undefined ? `${Dollar} ${item.price * item.quantity}` : 'Quantity not available'}</span></td>
                    </tr>
                ))
            }
            <tr>
                <td> </td>
                <td> </td>
                <td style={{ padding: "5px 0", paddingTop: 15 }}>
                    <span>{'Subtotal'}</span>
                </td>
                <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 15, }}>
                    <span>{Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span>
                </td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td style={{ padding: "5px 0", paddingTop: 0 }}>
                    <span>Tax({tax}%)</span>
                </td>
                <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }}>
                    <span>{Dollar} {getallCardTotal(cartData) * tax / 100}</span>
                </td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td style={{ padding: "10px 0" }}>
                    <span style={{ fontWeight: 600 }}>{'Amount Due (USD)'}</span>
                </td>
                <td style={{ padding: "10px 0", textAlign: "right" }}>
                    <span style={{ fontWeight: 600 }}>{Dollar} {getallCardTotal(cartData) + getallCardTotal(cartData) * tax / 100}</span>
                </td>
            </tr>
        </>
    )
}
