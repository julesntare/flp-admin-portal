import React from 'react'
import { Table } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import InvoiceRightSide from './InvoiceRightSide'
import InvoiceAddress from './InvoiceAddress'
import InvoiceDetail from './InvoiceDetail'

export default function InvoiceFiveHeader() {
    return (
        <td>
            <Table className="table-responsive" style={{ width: "100%" }} borderless>
                <tbody>
                    <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <td>
                            <Image className='for-light' src={dynamicImage(`logo/logo.png`)} alt="logo" />
                            <Image className='for-dark' src={dynamicImage(`logo/logo.png`)} alt="logo" />
                        </td>
                        <td>
                            <InvoiceRightSide />
                        </td>
                    </tr>
                    <tr style={{ display: "flex", justifyContent: "space-between" }}>
                        <InvoiceAddress />
                        <InvoiceDetail />
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}
