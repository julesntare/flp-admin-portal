import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { JobDetailsTitle, JobSearchTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import JobDetailsRightCards from './JobDetailsRightCards'

export default function JobDetailsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={JobDetailsTitle} parent={JobSearchTitle} title={JobDetailsTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <JobDetailsRightCards/>
                </Row>
            </Container>
        </Fragment>
    )
}
