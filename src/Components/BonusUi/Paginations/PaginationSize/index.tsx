import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { pageSizeSubTitle } from '../../../../Data/BonusUiData/PaginationData'
import { PaginationSizeTitle } from '../../../../Utils/Constants'
import LargePage from './LargePage'
import MediumPage from './MediumPage'
import SmallPage from './SmallPage'

export default function PaginationSize() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PaginationSizeTitle} subTitle={pageSizeSubTitle} />
                <CardBody>
                    <LargePage />
                    <MediumPage />
                    <SmallPage />
                </CardBody>
            </Card>
        </Col>
    )
}
