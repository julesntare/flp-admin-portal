import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { FiUploadCloud } from 'react-icons/fi';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { H4 } from '../../../../AbstractElements';
import { SingleFileuploadTitle } from '../../../../Utils/Constants';

export default function SingleFileupload() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    }
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={SingleFileuploadTitle} />
                <CardBody>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        maxFiles={1}
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
