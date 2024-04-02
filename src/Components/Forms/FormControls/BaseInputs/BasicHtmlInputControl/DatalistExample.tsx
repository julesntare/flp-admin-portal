import React, { Fragment } from 'react'
import { Col, Input, Label } from 'reactstrap'
import { DatalistExampleTitle } from '../../../../../Utils/Constants'

export default function DatalistExample() {
    
    return (
        <Fragment>
            <Col sm={3}> <Label for="exampleDataList">{DatalistExampleTitle}</Label></Col>
            <Col sm={9}>
                <Input type="text" id="exampleDataList" list="datalistOptions" placeholder="Look up your nation..." />
                <datalist id="datalistOptions">
                    <option value="San Francisco"></option>
                    <option value="New York"></option>
                    <option value="Seattle"></option>
                    <option value="Los Angeles"></option>
                    <option value="Chicago"></option>
                    <option value="India"></option>
                </datalist>
            </Col>
        </Fragment>
    )
}
