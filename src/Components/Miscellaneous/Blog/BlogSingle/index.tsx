import React, { Fragment } from 'react'
import { BlogSingleTitle, BlogTitle } from '../../../../Utils/Constants'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Col, Container, Row } from 'reactstrap'
import BlogBoxSingle from './BlogBoxSingle'

export default function BlogSingleContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BlogSingleTitle} parent={BlogTitle} title={BlogSingleTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <BlogBoxSingle />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
