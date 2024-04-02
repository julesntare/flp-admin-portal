import React from 'react'
import { Col, Row } from 'reactstrap'
import { H6 } from '../../../AbstractElements'
import { featherIconsData } from '../../../Data/IconsData/FeatherIconsData'
import { GetIconTagType } from '../../../Types/IconsType'

export default function FeatherIconsBody({ getIconTag }: GetIconTagType) {
    const featherIcons = require('feather-icons');
    return (
        <Row className='icon-lists feather-icons'>
            {featherIconsData.map((icon, i) => (
                <Col xs={12} sm={6} xl={4} key={i} onClick={() => getIconTag(icon)}>
                    <div className='d-flex'>
                        <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon].toSvg(icon) }} />
                        <div className="flex-grow-1 align-self-center">
                            <H6 className='mt-0'>{icon}</H6>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
