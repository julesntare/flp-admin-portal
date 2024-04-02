import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ApplyTitle, JobSearchTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import ApplyForm from './ApplyForm'

export default function ApplyJobsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ApplyTitle} parent={JobSearchTitle} title={ApplyTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar/>
                    <ApplyForm/>
                </Row>
            </Container>
        </Fragment>
    )
}
