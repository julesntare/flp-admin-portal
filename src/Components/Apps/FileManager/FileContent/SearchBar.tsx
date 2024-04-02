import React, { ChangeEvent } from 'react'
import { Form, Input } from 'reactstrap'
import { FileSearchBarProps } from '../../../../Types/FileManagerType'

export default function SearchBar({ searchFile, setSearchFile }: FileSearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchFile(e.target.value);
    };
    return (
        <Form className="form-inline">
            <div className="d-flex align-items-center mb-0">
                <i className="fa fa-search"></i>
                <Input type="text" placeholder="Search..." plaintext onChange={handleChange} value={searchFile} />
            </div>
        </Form>
    )
}
