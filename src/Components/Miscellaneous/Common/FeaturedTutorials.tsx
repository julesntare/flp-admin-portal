import React from 'react'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'
import { Rating } from 'react-simple-star-rating'
import { H3, H6, Image, LI, P, UL } from '../../../AbstractElements'
import { FeaturedTutorialsTitle } from '../../../Utils/Constants'
import { featuredTutorialsData } from '../../../Data/MiscellaneousData/FaqData'
import { dynamicImage } from '../../../Utils'

export default function FeaturedTutorials() {
    return (
        <Col lg={12}>
            <div className="header-faq"><H3 className="mb-0">{FeaturedTutorialsTitle}</H3></div>
            <Row>
                {featuredTutorialsData.map((data) => (
                    <Col xl={3} md={6} className="box-col-3" key={data.id}>
                        <Card className="features-faq product-box">
                            <div className="faq-image product-img">
                                <Image className="img-fluid" src={dynamicImage(`faq/${data.image}`)} alt="" />
                                <div className="product-hover">
                                    <UL className='simple-list flex-row'>
                                        <LI><i className="icon-link"></i></LI>
                                        <LI><i className="icon-import"></i></LI>
                                    </UL>
                                </div>
                            </div>
                            <CardBody>
                                <H6>{data.title}</H6>
                                <P>{data.description}</P>
                            </CardBody>
                            <CardFooter>
                                <span>{'Dec 15, 2023'}</span>
                                <span className="pull-right"><Rating fillColor="#307EF3" initialValue={Math.random() * 5} size={14} /></span>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
