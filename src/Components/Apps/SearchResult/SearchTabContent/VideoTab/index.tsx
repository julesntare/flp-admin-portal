import React from 'react'
import { Col, Pagination, Row } from 'reactstrap'
import { SearchResultInitialState } from '../../../../../Types/SearchResultType'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import { Href, VideoTabTitle } from '../../../../../Utils/Constants'

export default function VideoTab({ allResult }: SearchResultInitialState) {

    return (
        <Row>
            <H5 className="f-w-700 mb-2">{VideoTabTitle}</H5>
            {allResult &&
                allResult.map((item) => (
                    <Col xxl={6} key={item.id}>
                        <div className="d-flex info-block">
                            <iframe className="me-3 mb-3" width="200" height="100" src={item.videoLink}></iframe>
                            <div className="flex-grow-1">
                                <H5>{item.title}</H5>
                                <a href={Href}>{item.url}</a>
                                <P>{item.detail}</P>
                                <div className="star-ratings">
                                    <UL className="simple-list flex-row search-info">
                                        <LI>{item.star}</LI>
                                        <LI>{item.vote}</LI>
                                        <LI>{item.news}</LI>
                                    </UL>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            <Pagination />
        </Row>
    )
}
