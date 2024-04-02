import React from 'react'
import { Card, CardBody, Col,} from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { defaultPageSubTitle } from '../../../../Data/BonusUiData/PaginationData'
import { DefaultPaginationTitle } from '../../../../Utils/Constants'
import DefaultPaginationList from '../Common/DefaultPaginationList'

export default function DefaultPagination() {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb=0' title={DefaultPaginationTitle} subTitle={defaultPageSubTitle} />
                <CardBody>
                    <DefaultPaginationList/>
                </CardBody>
            </Card>
        </Col>
    )
}
