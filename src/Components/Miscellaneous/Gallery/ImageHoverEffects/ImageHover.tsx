import React, { Fragment } from 'react'
import { hoverImageData } from '../../../../Data/MiscellaneousData/GalleryData'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Image } from '../../../../AbstractElements'
import { HoverEffect } from '../../../../Utils/Constants'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function ImageHover() {
    return (
        <Fragment>
            {dynamicNumber(15).map((item, i) => (
                <Row key={i}>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={`${HoverEffect} ${item}`} />
                            <CardBody>
                                <Row id="aniimated-thumbnials" className="my-gallery gallery">
                                    {hoverImageData.map((image, index) => (
                                        <Col xs={6} md={3} key={index}>
                                            <figure itemProp="associatedMedia" className={`img-hover hover-${item}`} key={i}>
                                                <div>
                                                    <Image className='img-fluid' src={dynamicImage(`lightgallry/${image}`)} alt="" />
                                                </div>
                                            </figure>
                                        </Col>
                                    ))}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Fragment>
    )
}
