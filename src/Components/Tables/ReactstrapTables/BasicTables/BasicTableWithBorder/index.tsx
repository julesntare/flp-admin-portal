import React from 'react'
import { Card, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { BasicTableWithBorderTitle } from '../../../../../Utils/Constants'
import { basicTableBody, basicTableHeader, basicTableWithBorderSubTitle } from '../../../../../Data/Tables/ReactstrapTablesData/BasicTablesData'
import CommonTable from '../Common/CommonTable'
import { Badges, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function BasicTableWithBorder() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={BasicTableWithBorderTitle} span={basicTableWithBorderSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable headData={basicTableHeader} headRowClass='border-bottom-primary'>
                        {basicTableBody.map((data) => (
                            <tr className={`border-bottom-${data.color}`} key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td> <Image className="img-30 me-2" src={dynamicImage(`user/${data.image}`)} alt="users" body={true} />{data.firstname}</td>
                                <td>{data.lastName}</td>
                                <td>{data.userName}</td>
                                <td>{data.designation}</td>
                                <td>{data.company}</td>
                                <td> <Badges color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>{data.language}</Badges></td>
                                <td>{data.country}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}