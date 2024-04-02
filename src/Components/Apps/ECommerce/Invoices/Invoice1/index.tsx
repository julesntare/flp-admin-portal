import React, { Fragment, useRef } from 'react'
import { Container, Table } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs'
import { Ecommerce, InvoiceTitle } from '../../../../../Utils/Constants'
import Print from '../Common/Print'
import InvoiceHeader from './InvoiceHeader'
import InvoiceBackImage from './InvoiceBackImage'
import InvoiceContent from './InvoiceContent'
import InvoiceOrder from './InvoiceOrder'
import InvoiceSign from './InvoiceSign'

export default function Invoice1Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={InvoiceTitle} parent={Ecommerce} title={InvoiceTitle} />
            <Container className="invoice-1">
                <div ref={componentRef}>
                    <Table className="table-wrapper" borderless>
                        <tbody>
                            <tr>
                                <InvoiceHeader />
                            </tr>
                            <tr>
                                <InvoiceBackImage />
                            </tr>
                            <tr>
                                <InvoiceContent />
                            </tr>
                            <tr>
                                <InvoiceOrder />
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
                                <InvoiceSign />
                                <td>
                                    <Print componentRef={componentRef} />
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </Container>
        </Fragment>
    )
}
