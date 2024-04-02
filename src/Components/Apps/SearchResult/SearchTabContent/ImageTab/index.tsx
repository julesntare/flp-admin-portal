import React from 'react'
import { Col, Pagination, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import { H5, P } from '../../../../../AbstractElements'
import { socialPhotosData } from '../../../../../Data/AppsData/SocialAppData'
import { dynamicImage } from '../../../../../Utils'
import { Href, ImageTabTitle, PortfolioTitle } from '../../../../../Utils/Constants'

export default function ImageTab() {
    return (
        <div>
            <H5 className="f-w-700 mb-2">{ImageTabTitle}</H5>
            <Row className="my-gallery gallery-with-description">
                <Gallery>
                    {socialPhotosData.map((item) => (
                            <Col xl={3} sm={6} key={item.id}>
                                <figure>
                                    <Item original={dynamicImage(`big-lightgallry/${item.image}`)}>
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item.image}`)} alt="" />
                                                <div className="caption">
                                                    <H5>{PortfolioTitle}</H5>
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
            <Pagination />
        </div>
    )
}
