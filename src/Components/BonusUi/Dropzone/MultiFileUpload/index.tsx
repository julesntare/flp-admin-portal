import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import Dropzone, { IFileWithMeta } from 'react-dropzone-uploader';
import { FiUploadCloud } from 'react-icons/fi';
import { MultiFileUploadTitle } from '../../../../Utils/Constants';
import { H4 } from '../../../../AbstractElements';

export default function MultiFileUpload() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };
    const handleSubmit = (successFiles: IFileWithMeta[], allFiles: IFileWithMeta[]): void => {
        allFiles.forEach((f) => f.remove());
    };
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={MultiFileUploadTitle} />
                <CardBody>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        onSubmit={handleSubmit}
                        accept="image/*"
                        inputContent={
                            <div className='dz-message needsclick' key={1}>
                                <FiUploadCloud />
                                <H4>{"Drop files here or click to upload."}</H4>
                                <span className='note needsclick'>
                                    {'(This is just a demo dropzone. Selected files are '}<strong>{'not'}</strong>{' actually uploaded.)'}
                                </span>
                            </div>
                        }
                    />
                </CardBody>
            </Card>
        </Col>
    )
}
