import React, { useEffect, useState } from 'react'
import { Card, CardHeader, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { AddProjectsAndUploadTitle, Delete, Edit, Href, Update } from '../../../../../Utils/Constants'
import TableHead from '../../../../../Utils/CommonComponents/TableHead'
import { addProjectsUploadHead } from '../../../../../Data/AppsData/UsersData'
import { Btn } from '../../../../../AbstractElements'
import { UserEditTableProp } from '../../../../../Types/UsersType'
import { UserEditTableApi } from '../../../../../api'

export default function AddProjectsAndUpload() {
    const [data, setData] = useState<UserEditTableProp[]>([]);
    const fetchData = async () => {
        try {
            axios.get(UserEditTableApi).then((response) => {
                setData(response.data);
            });
        } catch (error) {
            console.log('cancelled', error);
        }
    };
    useEffect(() => { fetchData();}, []);

    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={AddProjectsAndUploadTitle} titleClass='card-title' />
                <div className="table-responsive custom-scrollbar theme-scrollbar add-project">
                    <Table className="card-table table-vcenter text-nowrap">
                        <TableHead headeData={addProjectsUploadHead} />
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <Link className='text-inherit' to={`${process.env.PUBLIC_URL}/applications/project/project-list`}>
                                            {item.projectName}
                                        </Link>
                                    </td>
                                    <td>{item.date}</td>
                                    <td><span className="status-icon bg-success"></span>{item.status}</td>
                                    <td>{item.price}</td>
                                    <td className="text-end">
                                        <a className="icon" href={Href}></a><Btn color='primary' size='sm'><i className="fa fa-pencil me-1"></i>{Edit}</Btn>
                                        <a className="icon" href={Href}></a><Btn color='transparent' size='sm'><i className="fa fa-link me-1"></i>{Update}</Btn>
                                        <a className="icon" href={Href}></a><Btn color='danger' size='sm'><i className="fa fa-trash me-1"></i>{Delete}</Btn>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}
