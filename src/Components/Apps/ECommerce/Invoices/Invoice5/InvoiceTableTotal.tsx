import React from 'react'

export default function InvoiceTableTotal() {
    return (
        <>
            <tr>
                <td style={{ border: "none"}}> </td>
                <td style={{ border: "none"}}> </td>
                <td style={{ border: "none"}}> </td>
                <td style={{ textAlign: "center", padding: "35px 0 18px" ,border: "none"}}>
                    <span style={{ opacity: "0.8", fontWeight: 600 }}>{'Subtotal'} </span>
                </td>
                <td className="back" style={{ textAlign: "center", background: "#F5F6F9", display: "block", padding: "35px 0 18px" , border: "none"}}>
                    <span style={{ color: "var(--theme-default)", fontWeight: 600, opacity: "0.9" }}>$6100.00</span>
                </td>
            </tr>
            <tr>
                <td style={{ border: "none"}}> </td>
                <td style={{ border: "none"}}> </td>
                <td style={{ border: "none"}}> </td>
                <td style={{ width: "12%", textAlign: "center" , border: "none"}}>
                    <span style={{ opacity: "0.8", fontWeight: 600 }}>{'VAT / Tax 15% '}</span>
                </td>
                <td className="back" style={{ textAlign: "center", background: "#F5F6F9", display: "block", paddingBottom: 18 , border: "none"}}>
                    <span style={{ color: "var(--theme-default)", fontWeight: 600, opacity: "0.9" }}>$50.00</span>
                </td>
            </tr>
            <tr>
                <td style={{ border: "none"}}/>
                <td style={{ border: "none"}}/>
                <td style={{ border: "none"}}> </td>
                <td style={{ width: "12%", textAlign: "center", border: "none" }}>
                    <span style={{ opacity: "0.8", fontWeight: 600 }}>{'Discount'} </span>
                </td>
                <td style={{ textAlign: "center", background: "#F5F6F9", display: "block", border: "none" ,paddingBottom: 18 }}>
                    <span style={{ color: "var(--theme-default)", fontWeight: 600, opacity: "0.9" }}>$30.00</span>
                </td>
            </tr>
            <tr>
                <td style={{ border: "none"}}> </td>
                <td style={{ border: "none"}}> </td>
                <td style={{ border: "none"}}/>
                <td style={{ width: "12%", textAlign: "center" , border: "none"}}>
                    <span style={{ opacity: "0.8", fontWeight: 600 }}>{'Total Due'}</span>
                </td>
                <td style={{ textAlign: "center", background: "#F5F6F9" , border: "none"}}>
                    <span style={{ color: "#ffffff", fontWeight: 600, opacity: "0.9", background: "var(--theme-default)", padding: "12px 37px", marginTop: 0, display: "block" }}>$6120.00</span>
                </td>
            </tr>
        </>
    )
}
