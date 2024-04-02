import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { TableHeadOptionsTitle } from '../../../../../Utils/Constants'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'
import { tableHeadOptionBody, tableHeadOptionHeader, tableHeadOptionsSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'

export default function TableHeadOptions() {
    return (
        <Col sm={6}>
            <Card>
                <CardHeaderSpan heading={TableHeadOptionsTitle} span={tableHeadOptionsSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable headClass='table-dark' headData={tableHeadOptionHeader}>
                                {tableHeadOptionBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.userName}</td>
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
