import React from 'react'
import { Card, CardBody, Row } from 'reactstrap'
import Masonry from 'react-masonry-css'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MasonryGalleryTitle } from '../../../../Utils/Constants'
import { masonryImageData } from '../../../../Data/MiscellaneousData/GalleryData'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function MasonryGallery() {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={MasonryGalleryTitle} />
            <CardBody className="photoswipe-pb-responsive">
                <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
                    {masonryImageData.map((item, index) => (
                        <figure key={index}>
                            <Image src={dynamicImage(`masonry/${item.src}`)} className="img-thumbnail" alt="" />
                        </figure>
                    ))}
                </Masonry>
            </CardBody>
        </Card>
    )
}
