import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../../Utils/CommonComponents/CommonCardHeader'
import { ActivityLogTitle } from '../../../../../../Utils/Constants'
import { activityLogData } from '../../../../../../Data/AppsData/SocialAppData'
import { H3, P } from '../../../../../../AbstractElements'

export default function ActivityLog() {
    return (
        <Col sm={12} className='activity-log-main'>
            <Card>
                <CommonCardHeader title={ActivityLogTitle} />
                <CardBody>
                    <div className="activity-log">
                        {activityLogData.map((data) => (
                            <div className="my-activity" key={data.id}>
                                <H3 className="mb-3">{data.title}</H3>
                                {data.child.map((item) => (
                                    <P key={item.id}>
                                        <span> {item.icon}</span>
                                        {item.text}
                                    </P>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
