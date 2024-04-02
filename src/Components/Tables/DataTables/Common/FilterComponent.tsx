import React from 'react'
import { FilterComponentProps } from '../../../../Types/TableType'
import { Col, Input, Label, Row } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Clear } from '../../../../Utils/Constants'

export default function FilterComponent({ onFilter, onClear, filterText }: FilterComponentProps) {
    return (
        <Row className="align-items-center justify-content-end">
            <Col xs="auto"><Label>{'Search'}:</Label></Col>
            <Col xs="auto" className='d-flex flex-row'>
                <Input type="text" value={filterText} onChange={onFilter} placeholder="Filter by name" />
                <Btn color='light' className='ms-2 mb-3' onClick={onClear}>{Clear}</Btn>
            </Col>
        </Row>
    )
}
