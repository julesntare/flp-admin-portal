import React from 'react'
import { Col, Row } from 'reactstrap'
import ProductDesignerCard from './ProductDesignerCard'
import { H3 } from '../../../../../AbstractElements'
import RightSidebarCards from '../../Common/RightSidebarCards'
import { SimilarJobs } from '../../../../../Utils/Constants'

export default function JobDetailsRightCards() {
    return (
        <Col xxl={9} xl={8} className="box-col-8">
            <ProductDesignerCard />
            <div className="header-faq">
                <H3 className="mb-0 f-w-600">{SimilarJobs}</H3>
            </div>
            <Row>
                <RightSidebarCards limit={4} colClass='col-xl-6 box-col-6' />
            </Row>
        </Col>
    )
}
