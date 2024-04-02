import React from 'react'
import { Table } from 'reactstrap'
import { invoiceSixTable } from '../../../../../Data/AppsData/EcommerceData/InvoiceData'
import { H3 } from '../../../../../AbstractElements'
import InvoiceSixTableBody from './InvoiceSixTableBody'
import InvoiceFooter from './InvoiceFooter'

export default function InvoiceSixTable() {
    return (
        <div>
            <div className="table-responsive custom-scrollbar custom-scrollbar invoice-table" id="table">
                <Table bordered striped>
                    <tbody>
                        <tr>
                            {invoiceSixTable.map((data, i) => (
                                <td className="item" key={i}>
                                    <H3 className="p-2 mb-0">{data}</H3>
                                </td>
                            ))}
                        </tr>
                        <InvoiceSixTableBody />
                        <tr>
                            <td />
                            <td />
                            <td className="Rate">
                                <H3 className="mb-0 p-2">{'Total'}</H3>
                            </td>
                            <td className="payment">
                                <H3 className="mb-0 p-2">$3,644.25</H3>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <InvoiceFooter />
        </div>
    )
}
