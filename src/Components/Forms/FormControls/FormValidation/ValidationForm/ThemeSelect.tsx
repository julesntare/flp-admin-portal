import React from 'react'
import { Col, Input } from 'reactstrap'

export default function ThemeSelect() {
    
    return (
        <Col xs={12}>
            <Input type="select">
                <option value="">{'Select Your Favorite Pixelstrap theme'}</option>
                <option value="1">{'Dunzo'}</option>
                <option value="2">{'Tivo'}</option>
                <option value="3">{'Wingo'}</option>
            </Input>
        </Col>
    )
}
