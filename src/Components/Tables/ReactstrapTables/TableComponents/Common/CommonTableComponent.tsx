import React from 'react'
import { Card, Col, Row, Table } from 'reactstrap';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan';
import { CommonTableComponentProps } from '../../../../../Types/TableType';

export default function CommonTableComponent({title,data,tableClass=''}: CommonTableComponentProps) {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan heading={title} />
                <div>
                    <Row className="card-block">
                        <Col sm={12} lg={12} xl={12}>
                            <div className="table-responsive custom-scrollbar">
                                <Table className={tableClass} bordered>
                                    <tbody>
                                        {data.map((component, index) => (
                                            <tr key={index}>
                                                <td className={component.tdClassName}>{component.tittle}</td>
                                                <td className='w-50'>
                                                    {component.tableColData}</td>
                                                <td>
                                                    {component.details.map((detail, i) => (
                                                        <span key={i}>{detail.text}
                                                            {detail.code && <code> {detail.code} </code>}
                                                        </span>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    );
}
