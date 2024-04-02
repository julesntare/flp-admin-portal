import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { pageAlignSubTitle } from '../../../../Data/BonusUiData/PaginationData'
import { PaginationAlignTitle } from '../../../../Utils/Constants'
import DefaultPaginationList from '../Common/DefaultPaginationList'
import AlignCenter from './AlignCenter'
import AlignBottom from './AlignBottom'

export default function PaginationAlign() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PaginationAlignTitle} subTitle={pageAlignSubTitle} />
                <CardBody>
                    <DefaultPaginationList pageClass='m-b-30' />
                    <AlignCenter />
                    <AlignBottom />
                </CardBody>
            </Card>
        </Col>
    )
}
