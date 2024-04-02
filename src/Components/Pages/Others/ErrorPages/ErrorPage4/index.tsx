import React from 'react'
import { Col, Container } from 'reactstrap'
import { Error4 } from '../../PagesSvgIcons'
import { Btn, H3, P } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { BackToHomePage } from '../../../../../Utils/Constants'

export default function ErrorPage4() {
    return (
        <div className="page-wrapper compact-wrapper">
            <div className="error-wrapper">
                <Container>
                    <div className="svg-wrraper mb-0">
                        <Error4 />
                    </div>
                    <Col md={8} className="offset-md-2">
                        <H3>{'Internal Server Error'}</H3>
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
