import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BonusUi, BreadcrumbTitle, Href, WithIconBreadcrumbTitle } from '../../../../Utils/Constants'
import { withIconBreadcrumbSubTitle } from '../../../../Data/BonusUiData/BreadcrumbData'

export default function WithIconBreadcrumb() {
    return (
        <Col sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={WithIconBreadcrumbTitle} subTitle={withIconBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='p-l-0'>
                        <BreadcrumbItem href={Href} tag={'a'}><i className="fa fa-home" /></BreadcrumbItem>
                        <BreadcrumbItem active>{BonusUi}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='m-b-0 p-b-0 p-l-0'>
                        <BreadcrumbItem tag={'a'} href={Href}><i className="fa fa-home" /></BreadcrumbItem>
                        <BreadcrumbItem href={Href}>{BonusUi}</BreadcrumbItem>
                        <BreadcrumbItem active>{BreadcrumbTitle}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}

