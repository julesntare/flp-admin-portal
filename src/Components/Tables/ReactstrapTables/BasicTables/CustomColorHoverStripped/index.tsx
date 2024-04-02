import React from 'react'
import { Card, Col } from 'reactstrap'
import { CustomColorHoverStrippedTitle } from '../../../../../Utils/Constants'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { customColorHoverStrippedBody, customColorHoverStrippedHead, customTableSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import CommonTable from '../Common/CommonTable'

export default function CustomColorHoverStripped() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={CustomColorHoverStrippedTitle} span={customTableSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable strip={true} hover={true} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' headData={customColorHoverStrippedHead}>
                        {customColorHoverStrippedBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.title}</td>
                                <td>{data.year}</td>
                                <td>{data.studio}</td>
                                <td>{data.budget}</td>
                                <td>{data.boxOffice}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
