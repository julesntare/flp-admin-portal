import React, { Fragment, useRef } from 'react'
import { Container, Table } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs'
import { Ecommerce, InvoiceTitle } from '../../../../../Utils/Constants'
import InvoiceFourHeader from './InvoiceFourHeader'
import InvoiceFourDetail from './InvoiceFourDetail'
import InvoiceFourTable from './InvoiceFourTable'
import InvoiceTotal from './InvoiceTotal'
import Print from '../Common/Print'
import CommonInvoiceSign from '../Common/InvoiceSign'

export default function Invoice4Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <Fragment>
            <Breadcrumbs pageTitle={InvoiceTitle} parent={Ecommerce} title={InvoiceTitle} />
            <Container className="invoice-4">
                <div ref={componentRef}>
                    <Table style={{ width: "100%", margin: "0, auto" }} borderless>
                        <tbody>
                            <tr>
                                <InvoiceFourHeader />
                            </tr>
                            <tr>
                                <InvoiceFourDetail />
                            </tr>
                            <tr>
                                <InvoiceFourTable />
                            </tr>
                            <tr>
                                <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, var(--theme-default) 20.61%, #54BA4A 103.6%)", display: "block", padding: "0", }} />
                            </tr>
                            <tr>
                                <InvoiceTotal />
                            </tr>
                            <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                <CommonInvoiceSign />
                                <td><Print componentRef={componentRef} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Fragment>
    )
}
