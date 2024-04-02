import React from 'react'
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { SearchArticlesTitle } from '../../../../Utils/Constants'
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'

export default function SearchArticle() {
    return (
        <Col lg={12}>
            <Card className="card-mb-faq xs-mt-search">
                <CardHeader className="faq-header pb-0">
                    <H4>{SearchArticlesTitle}</H4>
                    <FeatherIconCom iconName='HelpCircle' />
                </CardHeader>
                <CardBody className="faq-body">
                    <div className="faq-form">
                        <Input type="text" placeholder="Search.." />
                        <FeatherIconCom iconName='Search' className="search-icon" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
