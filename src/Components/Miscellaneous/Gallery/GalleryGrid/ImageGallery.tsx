import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, ImageGalleryTitle } from '../../../../Utils/Constants'
import { galleryData } from '../../../../Data/MiscellaneousData/GalleryData'
import { dynamicImage } from '../../../../Utils'

export default function ImageGallery() {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={ImageGalleryTitle} />
            <CardBody className="gallery my-gallery ">
                <Row>
                    <Gallery>
                        {galleryData.map((item, i) => (
                            <Col xl={3} md={4} xs={6} key={i}>
                                <figure>
                                    <Item original={dynamicImage(`big-lightgallry/${item}`)}>
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className='img-thumbnail' ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item}`)} alt='' />
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
