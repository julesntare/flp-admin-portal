import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { colorBreadcrumbSubTitle } from '../../../../Data/BonusUiData/BreadcrumbData'
import { ColoredBreadcrumbTitle } from '../../../../Utils/Constants'
import BgInfoBreadcrumb from './BgInfoBreadcrumb'
import BgSecondaryBreadcrumb from './BgSecondaryBreadcrumb'
import BgSuccessBreadcrumb from './BgSuccessBreadcrumb'

export default function ColoredBreadcrumb() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ColoredBreadcrumbTitle} subTitle={colorBreadcrumbSubTitle} />
                <CardBody>
                    <BgInfoBreadcrumb />
                    <BgSecondaryBreadcrumb />
                    <BgSuccessBreadcrumb />
                </CardBody>
            </Card>
        </Col>
    )
}
