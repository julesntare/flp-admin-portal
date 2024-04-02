import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { NewCustomersTitle } from '../../../../../Utils/Constants'
import { monthlyDropdownList, newCustomersTableData } from '../../../../../Data/DashboardsData/ECommerceData'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function NewCustomers() {
    return (
        <Col xl={12} className="pe-0">
            <Card className="new-customers">
                <DropdownWithHeader headerClass='pb-0' heading={NewCustomersTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display" width={100}>
                            <tbody>
                                {newCustomersTableData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex">
                                                <Image src={dynamicImage(`dashboard-2/user/${item.src}`)} alt="" />
                                                <div className="flex-grow-1 ms-2">
                                                    <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`}>
                                                        <span>{item.name}</span>
                                                        <H5>{item.mail}</H5>
                                                    </Link>
                                                </div>
                                                <div className="active-status active-online"></div>
                                            </div>
                                        </td>
                                        <td>{item.brand}</td>
                                        <td>{item.date}</td>
                                        <td>{'$'}{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
