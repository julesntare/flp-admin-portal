import React from 'react'
import { Table } from 'reactstrap'
import { useSelector } from 'react-redux';
import { ProductDataTypes } from '../../../../../Types/EcommerceType';
import { RootState } from '../../../../../redux-toolkit/store';
import { Dollar } from '../../../../../Utils/Constants';

export default function InvoiceContent() {
    const { cartData } = useSelector((state: RootState) => state.product);
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
        <td>
            <Table className="bill-content w-100" borderless>
                <tbody>
                    <tr>
                        <td style={{ width: "36%" }}>
                            <span style={{ opacity: "0.8" }}>{'Billed To'}</span>
                            <h6 style={{ width: "46%" }}>{'Dunzo Matchett Vandelay Group LTD'}</h6>
                        </td>
                        <td style={{ width: "21%" }}>
                            <span style={{ opacity: "0.8" }}>{'Invoice Date'}</span>
                            <h6>09/03/2023</h6>
                        </td>
                        <td>
                            <span style={{ opacity: "0.8" }}>{'Invoice Number'}</span>
                            <h6>#VL25000365</h6>
                        </td>
                        <td style={{ textAlign: "right" }}>
                            <span style={{ opacity: "0.8" }}>{'Amount Dus (USD)'}</span>
                            <h2>{Dollar} {getallCardTotal(cartData) + getallCardTotal(cartData) * tax / 100}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "36%" }}>
                            <h6 style={{ width: "63%", paddingTop: 20 }}>{'2118 Thornridge Cir. Syracuse, Connecticut 35624, United State'}</h6>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
