import React from 'react'
import { Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CheckCircle, Info, PlusSquare, Target } from 'react-feather'
import { ProjectListNavProps } from '../../../../../Types/ProjectType'
import { All, CreateNewProject, Doing, Done, Href } from '../../../../../Utils/Constants'

export default function ProjectListNav({ activeTab, setActiveTab }: ProjectListNavProps) {
    return (
        <Card>
            <Row>
                <Col md={6} className="p-0">
                    <Nav className="border-tab d-flex" tabs>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}><Target />{All}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={Href} className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}><Info />{Doing}</NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink href={Href} className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}> <CheckCircle /> {Done}</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col md={6} className="p-0">
                    <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/applications/project/create-project`}>
                        <PlusSquare/> {CreateNewProject}
                    </Link>
                </Col>
            </Row>
        </Card>
    )
}
