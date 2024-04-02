import React from 'react'
import { IconsBodyProps } from '../../../Types/IconsType'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { IconsTitle } from '../../../Utils/Constants';

export default function ThemifyIconBody({ title, iconType, parentCallback }: IconsBodyProps) {
    const getIconTag = (tag: string) => {
        parentCallback(tag);
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={`${title} ${IconsTitle}`} />
                <CardBody>
                    <Row className='icon-lists'>
                        {iconType.map((icon, i) => (
                            <Col sm={6} md={6} lg={4} key={i} onClick={() => getIconTag(icon)}>
                                <i className={icon}></i>
                                {icon}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
