import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { AddPostTitle, BlogTitle } from '../../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import PostEdit from './PostEdit'

export default function AddPostContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AddPostTitle} parent={BlogTitle} title={AddPostTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <PostEdit />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
