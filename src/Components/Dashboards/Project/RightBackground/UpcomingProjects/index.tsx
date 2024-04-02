import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H4 } from '../../../../../AbstractElements'
import { UpcomingProjectsTitle } from '../../../../../Utils/Constants'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function UpcomingProjects() {
    return (
        <Col xl={12} className="p-0 pe-30 ps-20">
            <Card className="upcoming-project">
                <CardBody>
                    <Link to={`${process.env.PUBLIC_URL}/applications/project/project-list`}>
                        <div className="d-flex">
                            <H4>{UpcomingProjectsTitle}</H4>
                            <div className="flex-shrink-0">
                                <SvgIcon iconId='add' />
                            </div>
                        </div>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    )
}
