import React, { Fragment, useRef } from 'react'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs'
import { Ecommerce, InvoiceTitle } from '../../../../../Utils/Constants'
import { Container, Table } from 'reactstrap'
import InvoiceFiveHeader from './InvoiceFiveHeader'
import Print from '../Common/Print'
import InvoiceNumber from './InvoiceNumber'
import InvoiceTable from './InvoiceTable'
import CommonInvoiceSign from '../Common/InvoiceSign'

export default function Invoice5Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <Fragment>
            <Breadcrumbs pageTitle={InvoiceTitle} parent={Ecommerce} title={InvoiceTitle} />
            <Container className="invoice-5">
                <div ref={componentRef}>
                    <Table style={{ width: "100%", margin: "0, auto" }} borderless>
                        <tbody>
                            <tr>
                                <InvoiceFiveHeader />
                            </tr>
                            <tr>
                                <InvoiceNumber />
                            </tr>
                            <tr>
                                <InvoiceTable />
                            </tr>
                            <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }} >
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
