import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H4, P } from '../../../../AbstractElements'
import { Projects } from '../../../../Utils/Constants'
import { pendingProjectData } from '../../../../Data/DashboardsData/ProjectData'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function PendingProject() {
    return (
        <Col xl={4} lg={4} md={8}>
            <Row>
                {pendingProjectData.map((item) => (
                    <Col xl={12} key={item.id}>
                        <Card className="pending-project">
                            <CardBody>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <Link to={`${process.env.PUBLIC_URL}/applications/project/project-list`}>
                                            <H4>{item.title} {Projects}</H4><span>{item.text}</span>
                                        </Link>
                                        <P className="d-flex">
                                            <span className={`bg-light-${item.id === 2 ? 'danger' : 'success'} me-2`}>
                                                <SvgIcon iconId={item.id === 2 ? 'chart-down' : 'chart-up'} />
                                            </span>
                                            <span className={`font-${item.id === 2 ? 'danger' : 'success'} me-2`}>{item.percent}{'%'}</span>
                                            <span>{"Since last month"}</span>
                                        </P>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className={`bg-light-${item.color}`}>
                                            <SvgIcon iconId={item.icon} />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
