import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { ResponsiveLightBackgroundTitle } from '../../../../../Utils/Constants'
import { responsiveLightBackgroundBody, responsiveLightBackgroundHead, responsiveTablesSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'

export default function ResponsiveLightBackground() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={ResponsiveLightBackgroundTitle} span={responsiveTablesSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable tableClass='light-card' headData={responsiveLightBackgroundHead}>
                                {responsiveLightBackgroundBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.task}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.assign}</td>
                                        <td>{data.date}</td>
                                        <td>{data.price}</td>
                                        <td className={`font-${data.color}`}>{data.status}</td>
                                        <td>{data.progress}</td>
                                    </tr>
                                ))}
                            </CommonTable>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
