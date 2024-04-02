import React from 'react'

export default function InvoiceAddress() {
    return (
        <td>
            <span style={{ fontSize: 18, display: "block", fontWeight: 600, color: "var(--theme-default)", marginBottom: 14 }} >{'Invoice to'} :</span>
            <span style={{ fontSize: 18, display: "block", fontWeight: 600, color: "var(--theme-default)", marginBottom: 8 }} >Brooklyn Simmons</span>
            <span style={{ fontSize: 18, display: "block", opacity: "0.8", marginBottom: 8, width: "72%", lineHeight: "1.4" }}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
            </span>
            <span style={{ fontSize: 18, display: "block", opacity: "0.8", marginBottom: 8 }}>{'Phone'} : (219) 555-0114</span>
            <span style={{ fontSize: 18, display: "block", opacity: "0.8", marginBottom: 8 }} >{'Email'} : yourmail@themesforest.com</span>
            <span style={{ fontSize: 18, display: "block", opacity: "0.8", marginBottom: 8 }} >{'Website'}: www.websites.com</span>
        </td>
    )
}
