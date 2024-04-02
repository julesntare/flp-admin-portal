import React from 'react'
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { iconlistData, roundedPageSubTitle } from '../../../../Data/BonusUiData/PaginationData'
import { Href, RoundedPaginationTitle } from '../../../../Utils/Constants'

export default function RoundedPagination() {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb=0' title={RoundedPaginationTitle} subTitle={roundedPageSubTitle} />
                <CardBody>
                    <Pagination className="pagination-dark pagin-border-dark gap-2">
                        {iconlistData && iconlistData.map((item, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink className='rounded-circle' href={Href}>{item.text}</PaginationLink>
                            </PaginationItem>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Col>
    )
}
