import React from 'react'
import { Card, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'
import { inverseTableBody, inverseTableHeader, inverseTableSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import { InverseTableTitle } from '../../../../../Utils/Constants'

export default function InverseTable() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={InverseTableTitle} span={inverseTableSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable tableClass='table-inverse' headData={inverseTableHeader} headRowClass='border-bottom-light'>
                        {inverseTableBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.office}</td>
                                <td>{data.position}</td>
                                <td>{data.salary}</td>
                                <td>{data.joinDate}</td>
                                <td>{data.age}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
