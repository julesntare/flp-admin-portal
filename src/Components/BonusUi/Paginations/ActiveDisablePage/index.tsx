import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ActiveDisablePageTitle, Href } from '../../../../Utils/Constants'
import { activeClassData, activeDisableSubTitle } from '../../../../Data/BonusUiData/PaginationData'

export default function ActiveDisablePage() {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb=0' title={ActiveDisablePageTitle} subTitle={activeDisableSubTitle} />
                <CardBody>
                    <Pagination className="pagination-success pagin-border-success">
                        {activeClassData && activeClassData.map((item, index) => (
                            <PaginationItem key={index} className={item.id === 'Pagination3' ? 'active' : ''}>
                                <PaginationLink href={Href} className={item.id === 'Pagination1' ? 'disabled' : ''}>
                                    {item.text}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}
