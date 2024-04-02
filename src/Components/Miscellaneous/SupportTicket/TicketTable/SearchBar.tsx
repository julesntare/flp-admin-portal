import React, { useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { SearchBarProps } from "../../../../Types/MiscellaneousType";

export function SearchBar({ data, setFilteredData }: SearchBarProps) {
    const [searchText, setSearchText] = useState<string>("");

    const handleSearch = () => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const newFilteredData = data.filter(item => {
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
        <Row className="align-items-center justify-content-end mb-3">
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