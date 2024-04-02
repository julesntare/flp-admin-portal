import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Masonry from 'react-masonry-css'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { masonryImageData } from '../../../../Data/MiscellaneousData/GalleryData'
import { Href, MasonryDescriptionTitle, PortfolioTitle } from '../../../../Utils/Constants'
import { H4, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function MasonryDescription() {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={MasonryDescriptionTitle} />
            <CardBody>
                <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="col-xl-3 col-sm-6 grid-item">
                    {masonryImageData.map((item, i) => (
                        <figure key={i}>
                            <a href={Href}>
                                <Image className="img-thumbnail" src={dynamicImage(`masonry/${item.src}`)} alt="" />
                                <div className="caption">
                                    <H4>{PortfolioTitle}</H4>
                                    <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                                </div>
                            </a>
                        </figure>
                    ))}
                </Masonry>
            </CardBody>
        </Card>
    )
}
