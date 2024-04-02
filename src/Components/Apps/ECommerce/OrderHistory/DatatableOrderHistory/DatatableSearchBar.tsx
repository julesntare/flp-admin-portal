import React, { useState } from 'react'
import { Col, Input, Label, Row } from 'reactstrap';
import { DatatableSearchBarProps } from '../../../../../Types/EcommerceType';

export default function DatatableSearchBar({ tableData, setFilteredData }: DatatableSearchBarProps) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const newFilteredData = tableData.filter(item => {
            for (const field in item) {
                if (item.hasOwnProperty(field)) {
                    const fieldValue = String(item[field]).toLowerCase();
                    if (fieldValue.includes(lowerCaseSearchText)) {
                        return true;
                    }
                }
            }
            return false;
        });
        setFilteredData(newFilteredData);
    };

    return (
        <Row className="align-items-center justify-content-end">
            <Col xs="auto">
                <Label>{'Search'}:</Label>
            </Col>
            <Col xs="auto">
                <Input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyUp={handleSearch}
                />
            </Col>
        </Row>
    );
}
