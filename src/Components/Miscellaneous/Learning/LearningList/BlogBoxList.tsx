import React, { Fragment } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { learningListData } from '../../../../Data/MiscellaneousData/LearningData'
import { H3, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxList() {
    return (
        <Fragment>
            {learningListData.map((data) => (
                <Col xl={12} key={data.id}>
                    <Card>
                        <Row className="blog-box blog-list">
                            <Col sm={5}><Image className="img-fluid sm-100-w" src={dynamicImage(`faq/${data.image}`)} alt="" /></Col>
                            <Col sm={7}>
                                <div className="blog-details">
                                    <div className="blog-date"><span>{data.date}</span> {data.month}</div>
                                    <H3>{data.title}</H3>
                                    <div className="blog-bottom-content">
                                        <UL className="blog-social simple-list flex-row">
                                            <LI>{data.by}</LI>
                                            <LI>{data.hits}</LI>
                                        </UL>
                                        <hr />
                                        <P className="mt-0">{data.paragraph}</P>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            ))}
        </Fragment>
    )
}
