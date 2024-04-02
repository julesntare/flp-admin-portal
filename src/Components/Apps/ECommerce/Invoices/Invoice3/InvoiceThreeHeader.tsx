import React from 'react'
import { Table } from 'reactstrap'
import { dynamicImage } from '../../../../../Utils'
import { Image } from '../../../../../AbstractElements'

export default function InvoiceThreeHeader() {
    return (
        <td>
            <div className="invoice-img" style={{ position: "absolute" }}>
                <Image className="for-light" src={dynamicImage(`email-template/invoice-3/bg-0.png`)} alt="" />
                <Image className="for-dark" src={dynamicImage(`email-template/invoice-3/bg.jpg`)} alt="" />
            </div>
            <Table className="table-responsive" style={{ width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }} borderless>
                <tbody style={{ position: "relative" }}>
                    <tr>
                        <td style={{ padding: "30px 0" }}>
                            <Image className='for-light' src={dynamicImage(`logo/logo.png`)} alt="logo" />
                            <Image className='for-dark' src={dynamicImage(`logo/logo.png`)} alt="logo" />
                            <address style={{ opacity: "0.8", width: "36%", marginTop: 10, fontStyle: "normal" }}>
                                <span style={{ fontSize: 18, lineHeight: "1.5", fontWeight: 500 }} >1982 Harvest Lane New York, NY12210 United State</span>
                            </address>
                        </td>
                        <td style={{ textAlign: "end", padding: "30px 30px 30px 0" }}>
                            <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, color: "#fff", fontWeight: 700 }}>{'Invoice'}</span>
                            <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, color: "#fff", fontWeight: 500 }}>Receipt #1923195</span>
                            <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, color: "#fff", fontWeight: 500 }}>May 02, 2023
                            </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
