import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ProjectListTitle, ProjectTitle } from '../../../../Utils/Constants'
import ProjectListNav from './ProjectListNav';
import ProjectListTabContent from './ProjectListTabContent';

export default function ProjectListContainer() {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <Fragment>
            <Breadcrumbs pageTitle={ProjectListTitle} parent={ProjectTitle} title={ProjectListTitle} />
            <Container fluid>
                <Row className="project-cards">
                    <Col md={12} className="project-list">
                        <ProjectListNav activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Col>
                    <Col sm={12}>
                        <ProjectListTabContent activeTab={activeTab}/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
