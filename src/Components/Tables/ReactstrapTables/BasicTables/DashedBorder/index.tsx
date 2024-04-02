import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { DashedBorderTitle } from '../../../../../Utils/Constants'
import { dashedBorderBody, dashedBorderHeader, dashedBorderSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'

export default function DashedBorder() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={DashedBorderTitle} span={dashedBorderSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable tableClass="table-dashed" headData={dashedBorderHeader}>
                                {dashedBorderBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.activity}</td>
                                        <td>{data.category}</td>
                                        <td>{data.time}</td>
                                        <td>{data.instructor}</td>
                                        <td>{data.capacity}</td>
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
