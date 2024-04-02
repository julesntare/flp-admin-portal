import React from 'react'
import { HoverableRowsTitle } from '../../../../../Utils/Constants'
import { Card, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import CommonTable from '../Common/CommonTable'
import { hoverableRowsBody, hoverableRowsHeader, hoverableRowsSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'

export default function HoverableRows() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={HoverableRowsTitle} span={hoverableRowsSubTitle} />
                <div className="table-responsive custom-scrollbar signal-table">
                    <CommonTable headData={hoverableRowsHeader} hover={true} >
                        {hoverableRowsBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td className="d-flex align-items-center">
                                    <FeatherIconCom className={`bg-light-${data.color} font-${data.color}`} iconName={data.icon} />
                                    <span className={`font-${data.color}`}>{data.status}</span></td>
                                <td>{data.signalName}</td>
                                <td>{data.security}</td>
                                <td>{data.stage}</td>
                                <td>{data.schedule}</td>
                                <td>{data.teamLead}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
