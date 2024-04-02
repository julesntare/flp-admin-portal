import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { CaptionTitle, UserList } from '../../../../../Utils/Constants'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'
import { captionSubTitle, captionTableBody, captionTableHeader } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'

export default function CaptionTable() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={CaptionTitle} span={captionSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable caption={UserList} headData={captionTableHeader}>
                                {captionTableBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.employeeName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.experience}</td>
                                        <td>{data.sex}</td>
                                        <td>{data.number}</td>
                                        <td>{data.age}</td>
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
