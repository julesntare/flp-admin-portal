import React from 'react'
import { Col, Nav, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href, Next, Previous } from '../../../../../Utils/Constants'

export default function PaginationCard() {
    return (
        <Col xs={12} className="m-t-30">
            <Nav>
                <Pagination color='primary' className="justify-content-end simple-list flex-row">
                    <PaginationItem disabled><PaginationLink href={Href}>{Previous}</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href={Href}>{'1'}</PaginationLink></PaginationItem>
                    <PaginationItem active><PaginationLink href={Href}>{'2'}</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href={Href}>{'3'}</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href={Href}>{Next}</PaginationLink></PaginationItem>
                </Pagination>
            </Nav>
        </Col >
    )
}
