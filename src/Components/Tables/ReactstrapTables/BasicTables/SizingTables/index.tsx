import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { SizingTablesTitle } from '../../../../../Utils/Constants'
import { sizeTableSubTitle, sizingTablesBody, sizingTablesHeader } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'

export default function SizingTables() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={SizingTablesTitle} span={sizeTableSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable size='lg' headData={sizingTablesHeader}>
                                {sizingTablesBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.employeeName}</td>
                                        <td>{data.date}</td>
                                        <td className={`font-${data.color}`}>{data.status}</td>
                                        <td>{data.hours}</td>
                                        <td>{data.performance}</td>
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
