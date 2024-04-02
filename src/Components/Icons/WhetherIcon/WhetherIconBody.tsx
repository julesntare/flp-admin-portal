import React from 'react'
import { Col, Row } from 'reactstrap'
import { weatherIconData } from '../../../Data/IconsData/WeatherIconData'

export default function WhetherIconBody() {
    
    return (
        <Row className='icon-lists whether-icon'>
            {weatherIconData.map((icon, i) => (
                <Col lg={2} xs={3} key={i}>
                    {icon.icon}
                </Col>
            ))}
        </Row>
    )
}
