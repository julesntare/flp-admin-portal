import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { defaultBreadcrumbSubTitle } from '../../../../Data/BonusUiData/BreadcrumbData'
import { AlertTitle, DefaultBreadcrumbTitle, Home, Href, UiKits } from '../../../../Utils/Constants'

export default function DefaultBreadcrumb() {
    return (
        <Col sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={DefaultBreadcrumbTitle} subTitle={defaultBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb>
                        <BreadcrumbItem href={Href} tag={'a'}>{Home}</BreadcrumbItem>
                        <BreadcrumbItem active>{UiKits}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='m-0'>
                        <BreadcrumbItem tag={'a'} href={Href}>{Home}</BreadcrumbItem>
                        <BreadcrumbItem tag={'a'} href={Href}>{UiKits}</BreadcrumbItem>
                        <BreadcrumbItem active>{AlertTitle}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
