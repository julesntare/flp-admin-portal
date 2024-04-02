import React from 'react'
import { H4, Image, LI, P, UL } from '../../../../../AbstractElements'
import { Col, Row } from 'reactstrap'
import { CommentSectionProp } from '../../../../../Types/MiscellaneousType'
import { dynamicImage } from '../../../../../Utils'

export default function CommentSection({socialComment, colClass, item}: CommentSectionProp) {
    return (
        <div className="d-flex align-self-center">
            <Image className="align-self-center" src={dynamicImage(`blog/${item.src}`)} alt="Generic placeholder image" />
            <div className="flex-grow-1">
                <Row>
                    <div className={colClass}>
                        <H4 className="mt-0">{item.name}<span>{'(Designer)'}</span></H4>
                    </div>
                    {socialComment &&
                        <Col md={8}>
                            <UL className="flex-row comment-social float-start float-md-end">
                                <LI><i className="icofont icofont-thumbs-up"></i>{'02 Hits'}</LI>
                                <LI><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                            </UL>
                        </Col>}
                </Row>
                <P>{item.paragraph}</P>
            </div>
        </div>
    )
}
