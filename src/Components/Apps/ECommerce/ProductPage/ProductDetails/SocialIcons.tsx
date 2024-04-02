import React from 'react'
import { Col, Form, Row } from 'reactstrap'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { ShareIt } from '../../../../../Utils/Constants'

export default function SocialIcons() {
    return (
        <Row>
            <Col md={4}>
                <H6 className="product-title">{ShareIt}</H6>
            </Col>
            <Col md={8}>
                <div className="product-icon">
                    <UL className="simple-list flex-row product-social">
                        <LI className="d-inline-block">
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                        </LI>
                        <LI className="d-inline-block">
                            <a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a>
                        </LI>
                        <LI className="d-inline-block">
                            <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                        </LI>
                        <LI className="d-inline-block">
                            <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                        </LI>
                        <LI className="d-inline-block">
                            <a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a>
                        </LI>
                    </UL>
                    <Form className="d-inline-block f-right"></Form>
                </div>
            </Col>
        </Row>
    )
}
