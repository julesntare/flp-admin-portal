import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DividerBreadcrumbTitle, Home, Href, ProgressTitle, UiKits } from '../../../../Utils/Constants'
import { dividerBreadcrumbSubTitle } from '../../../../Data/BonusUiData/BreadcrumbData'

export default function DividerBreadcrumb() {
    return (
        <Col sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={DividerBreadcrumbTitle} subTitle={dividerBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='breadcrumb-icon'>
                        <BreadcrumbItem href={Href} tag={'a'}>{Home}</BreadcrumbItem>
                        <BreadcrumbItem active>{UiKits}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='m-0 breadcrumb-icon'>
                        <BreadcrumbItem tag={'a'} href={Href}>{Home}</BreadcrumbItem>
                        <BreadcrumbItem tag={'a'} href={Href}>{UiKits}</BreadcrumbItem>
                        <BreadcrumbItem active>{ProgressTitle}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
