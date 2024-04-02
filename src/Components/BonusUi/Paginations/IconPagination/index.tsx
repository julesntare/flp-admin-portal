import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, IconPaginationTitle } from '../../../../Utils/Constants'
import { iconPageSubTitle, iconlistData } from '../../../../Data/BonusUiData/PaginationData'

export default function IconPagination() {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb=0' title={IconPaginationTitle} subTitle={iconPageSubTitle} />
                <CardBody>
                    <Pagination className="pagination-secondary pagin-border-secondary">
                        {iconlistData && iconlistData.map((item, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink href={Href}>{item.text}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}
