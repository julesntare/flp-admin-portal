import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { blogBoxListData } from '../../../../Data/MiscellaneousData/BlogData'
import { ByAdmin } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxList() {
    return (
        <Col xxl={6} className="box-col-60 xl-60">
            {blogBoxListData.map((data) => (
                <Card key={data.id}>
                    <Row className="blog-box blog-list">
                        <Col sm={5}><Image className="img-fluid sm-100-w" src={dynamicImage(`blog/blog-${data.src}`)} alt="" /></Col>
                        <Col sm={7}>
                            <div className="blog-details">
                                <div className="blog-date"><span>{data.date}</span> {'January 2023'}</div>
                                <H4>{data.title}</H4>
                                <div className="blog-bottom-content">
                                    <UL className="simple-list flex-row blog-social">
                                        <LI>{ByAdmin}</LI>
                                        <LI>{data.hits}</LI>
                                    </UL>
                                    <hr />
                                    <P className="mt-0">{data.text}</P>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Col>
    )
}
