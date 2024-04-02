import React from 'react'
import { Table } from 'reactstrap'

export default function InvoiceNumber() {
    return (
        <td>
            <Table className="table-responsive" style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }} >
                <tbody>
                    <tr className="back">
                        <td style={{ background: "#F5F6F9", padding: "15px 25px" }} >
                            <p style={{ fontSize: 16, fontWeight: 500, color: "#307ef3", opacity: "0.8", margin: 0, lineHeight: 2 }} >{'Date'} :</p>
                            <span style={{ fontSize: 18, fontWeight: 600 }}>10 Mar, 2023</span>
                        </td>
                        <td style={{ background: "#F5F6F9", padding: "15px 25px" }} >
                            <p style={{ fontSize: 16, fontWeight: 500, color: "#307ef3", opacity: "0.8", margin: 0, lineHeight: 2 }} >{'Invoice No'} :</p>
                            <span style={{ fontSize: 18, fontWeight: 600 }}>#VL25000365</span>
                        </td>
                        <td style={{ background: "#F5F6F9", padding: "15px 25px" }}>
                            <p style={{ fontSize: 16, fontWeight: 500, color: "#307ef3", opacity: "0.8", margin: 0, lineHeight: 2 }}>{'Account No'} :</p>
                            <span style={{ fontSize: 18, fontWeight: 600 }}>0981234098765</span>
                        </td>
                        <td style={{ background: "#F5F6F9", padding: "15px 25px" }} >
                            <p style={{ fontSize: 16, fontWeight: 500, color: "#307ef3", opacity: "0.8", margin: 0, lineHeight: 2 }} >{'Due Amount'} :</p>
                            <span style={{ fontSize: 18, fontWeight: 600 }}>$7860.00 </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
