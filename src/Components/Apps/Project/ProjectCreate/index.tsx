import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ProjectCreateTitle, AppsTitle } from '../../../../Utils/Constants'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateNewProjectForm from './CreateNewProjectForm'

export default function ProjectCreateContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ProjectCreateTitle} parent={AppsTitle} title={ProjectCreateTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <CreateNewProjectForm/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
