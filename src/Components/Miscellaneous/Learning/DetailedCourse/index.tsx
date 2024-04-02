import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { DetailedCourseTitle, LearningTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BlogDetails from './BlogDetails'
import LearningFilter from '../Common/LearningFilter'

export default function DetailedCourseContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={DetailedCourseTitle} parent={LearningTitle} title={DetailedCourseTitle} />
            <Container fluid>
                <Row className='learning-block'>
                    <BlogDetails />
                    <LearningFilter/>
                </Row>
            </Container>
        </Fragment>
    )
}
