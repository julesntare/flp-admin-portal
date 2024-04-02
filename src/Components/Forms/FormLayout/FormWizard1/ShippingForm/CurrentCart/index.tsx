import React from 'react'
import { Col, Table } from 'reactstrap'
import { CurrentCartTitle, Price, Product, ProductDetail } from '../../../../../../Utils/Constants'
import { H5 } from '../../../../../../AbstractElements'
import { currentCartTableFooterData } from '../../../../../../Data/Forms/FormLayoutData'
import CurrentCartTableBody from './CurrentCartTableBody'

export default function CurrentCart() {
    return (
        <Col xl={4}>
            <div className="shipping-info">
                <H5>{CurrentCartTitle}</H5>
                <div className="overflow-auto">
                    <Table striped>
                        <thead>
                            <tr>
                                <th scope="col">{Product}</th>
                                <th scope="col">{ProductDetail}</th>
                                <th scope="col">{Price}</th>
                            </tr>
                        </thead>
                        <CurrentCartTableBody />
                        <tfoot>
                            {currentCartTableFooterData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.footerTittle}</td>
                                    <td colSpan={2}>{'$'}{data.price} </td>
                                </tr>
                            ))}
                        </tfoot>
                    </Table>
                </div>
            </div>
        </Col>
    )
}
