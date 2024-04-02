import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { TodayTasksTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../Data/DashboardsData/ECommerceData'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import { todayTasksHead, todayTasksTable } from '../../../../Data/DashboardsData/ProjectData'
import { Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function TodayTasks() {
    return (
        <Col xl={5} lg={5}>
            <Card className="today-task">
                <DropdownWithHeader headerClass='pb-0' heading={TodayTasksTitle} dropDownClass='icon-dropdown' dropDownList={monthlyDropdownList} dropDownIcon={true} />
                <CardBody className="clients-project">
                    <div className="table-responsive custom-scrollbar">
                        <Table className=" display">
                            <TableHead headeData={todayTasksHead} />
                            <tbody>
                                {todayTasksTable.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <Link to={`${process.env.PUBLIC_URL}/applications/project/project-list`}>
                                                <P>{item.paragraph}</P>
                                            </Link>
                                        </td>
                                        <td>
                                            <div className="user-details customers">
                                                <UL className='simple-list flex-row'>
                                                    {item.customers.map((list) => (
                                                        <LI className="d-inline-block" key={list.id}>
                                                            <Image src={dynamicImage(`dashboard-3/user/${list.image}`)} alt="user" />
                                                        </LI>
                                                    ))}
                                                </UL>
                                            </div>
                                        </td>
                                        <td>{item.date}</td>
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
