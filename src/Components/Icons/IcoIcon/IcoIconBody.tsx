import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { IconsBodyProps } from '../../../Types/IconsType';

export default function IcoIconBody({ title, iconType, parentCallback }: IconsBodyProps) {
    const getIconTag = (tag: string) => {
        parentCallback(tag);
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={title} />
                <CardBody>
                    <Row className='icon-lists'>
                        {iconType.map((icon, i) => (
                            <Col sm={6} md={6} lg={4} key={i} onClick={() => getIconTag(icon)}>
                                <i className={`icofont icofont-${icon}`}></i>
                                {icon}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
