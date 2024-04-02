import React from 'react'
import { Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H3, P } from '../../../../../AbstractElements'
import { BackToHomePage } from '../../../../../Utils/Constants'
import { Error1 } from '../../PagesSvgIcons'

export default function ErrorPage1() {
    return (
        <div className="page-wrapper compact-wrapper">
            <div className="error-wrapper">
                <Container>
                    <div className="svg-wrraper mb-0">
                        <Error1 />
                    </div>
                    <Col md={8} className="offset-md-2">
                        <H3>{'Page Not Found'}</H3>
                        <P className="sub-content">{'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.'}</P>
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                            <Btn size="lg" color="primary">{BackToHomePage}</Btn>
                        </Link>
                    </Col>
                </Container>
            </div>
        </div>
    )
}
