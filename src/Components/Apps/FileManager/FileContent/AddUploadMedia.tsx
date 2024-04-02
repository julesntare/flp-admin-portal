import React from 'react'
import { Form, Input } from 'reactstrap';
import { PlusSquare, Upload } from 'react-feather';
import { Btn } from '../../../../AbstractElements';
import { AddUploadMediaProps } from '../../../../Types/FileManagerType';
import { AddNew, UploadText } from '../../../../Utils/Constants';

export default function AddUploadMedia({onFileChange,onFileUpload}: AddUploadMediaProps) {
    const getFile = () => {
        const fileInput = document.getElementById("upfile") as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click();
        }
    };
    return (
        <div className="flex-grow-1 text-end">
            <Form className="d-inline-flex">
                <Btn color="primary" className='me-2' onClick={getFile}>
                    <PlusSquare />
                    {AddNew}
                </Btn>
                <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                    <Input id="upfile" multiple type="file" onChange={(e) => onFileChange(e)} />
                </div>
            </Form>
            <Btn color="primary" className='ms-2' outline onClick={onFileUpload}>
                <Upload />
                {UploadText}
            </Btn>
        </div>
    )
}
