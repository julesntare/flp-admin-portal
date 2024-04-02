import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, ImageGalleryDescriptionTitle, PortfolioTitle } from '../../../../Utils/Constants'
import { H4, P } from '../../../../AbstractElements'
import { galleryData } from '../../../../Data/MiscellaneousData/GalleryData'
import { dynamicImage } from '../../../../Utils'

export default function ImageGalleryDescription() {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={ImageGalleryDescriptionTitle} />
            <CardBody className="my-gallery gallery-with-description">
                <Row>
                    <Gallery>
                        {galleryData.map((item, i) => (
                            <Col xl={3} sm={6} key={i}>
                                <figure>
                                    <Item original={dynamicImage(`big-lightgallry/${item}`)} caption="hello">
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className='img-thumbnail' ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item}`)} alt='' />
                                                <div className='caption'>
                                                    <H4>{PortfolioTitle}</H4>
                                                    <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                                                </div>
                                            </Link>
                                        )}
                                    </Item>
                                </figure>
                            </Col>
                        ))}
                    </Gallery>
                </Row>
            </CardBody>
        </Card>
    )
}
