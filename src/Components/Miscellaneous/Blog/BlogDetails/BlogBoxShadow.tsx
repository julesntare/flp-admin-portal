import React from 'react'
import { Card, Col } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { MarkJecno } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxShadow() {
    return (
        <Col xxl={6} className="box-col-40 col-xl-40">
            <Card>
                <div className="blog-box blog-shadow">
                    <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="" />
                    <div className="blog-details">
                        <P>{'25 July 2023'}</P>
                        <H4>{"People just don't do it anymore. We have to change that. Sometimes the simplest things are the most profound."}</H4>
                        <UL className="simple-list flex-row blog-social">
                            <LI><i className="icofont icofont-user"></i>{MarkJecno}</LI>
                            <LI><i className="icofont icofont-thumbs-up"></i>{'02 Hits'}</LI>
                            <LI><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                        </UL>
                    </div>
                </div>
            </Card>
        </Col>
    )
}
