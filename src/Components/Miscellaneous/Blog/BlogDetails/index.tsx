import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BlogDetailsTitle, BlogTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BlogBoxShadow from './BlogBoxShadow'
import BlogBoxList from './BlogBoxList'
import BlogBoxGrid from './BlogBoxGrid'

export default function BlogDetailsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BlogDetailsTitle} parent={BlogTitle} title={BlogDetailsTitle} />
            <Container className="blog-page" fluid>
                <Row>
                    <BlogBoxShadow />
                    <BlogBoxList />
                    <BlogBoxGrid/>
                </Row>
            </Container>
        </Fragment>
    )
}
