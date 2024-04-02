import React from 'react'
import { Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Error2 } from '../../PagesSvgIcons'
import { Btn, H3, P } from '../../../../../AbstractElements'
import { BackToHomePage } from '../../../../../Utils/Constants'

export default function ErrorPage2() {
    return (
        <div className="error-wrapper">
            <Container>
                <div className="svg-wrraper mb-0">
                    <Error2 />
                </div>
                <Col md={8} className="offset-md-2 mt-3">
                    <H3>{'Oops! This Page is Not Found.'}</H3>
                    <P className="sub-content">{'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.'}</P>
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                        <Btn size="lg" color="primary">{BackToHomePage}</Btn>
                    </Link>
                </Col>
            </Container>
        </div>
    )
}
