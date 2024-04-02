import React from 'react'
import { Table } from 'reactstrap'
import { invoiceFourDetails } from '../../../../../Data/AppsData/EcommerceData/InvoiceData'

export default function InvoiceFourDetail() {
    return (
        <td>
            <Table className="table-responsive" style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
                <tbody>
                    <tr className="back">
                        {invoiceFourDetails.map((data, i) => (
                            <td style={{ background: "#F5F6F9", padding: "15px 25px" }} key={i}>
                                <p style={{ fontSize: 16, fontWeight: 500, color: "#307ef3", opacity: "0.8", margin: 0, lineHeight: 2 }}>{data.title} :</p>
                                <span style={{ fontSize: 18, fontWeight: 600 }}>{data.value}</span>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
