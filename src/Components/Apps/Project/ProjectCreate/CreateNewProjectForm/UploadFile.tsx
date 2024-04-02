import React from 'react'
import { Col, FormGroup, Label, Row } from 'reactstrap'
import Dropzone from "react-dropzone-uploader";
import { UploadProjectFile } from '../../../../../Utils/Constants'
import { H4 } from '../../../../../AbstractElements';

export default function UploadFile() {
    const getUploadParams = () => {
        return { url: "https://httpbin.org/post", };
    };

    return (
        <Row>
            <Col>
                <FormGroup>
                    <Label>{UploadProjectFile}</Label>
                    <Dropzone getUploadParams={getUploadParams} maxFiles={1} multiple={false} canCancel={false}
                        inputContent={
                            <div className='dz-message needsclick'>
                                <i className="icon-cloud-up" />
                                <H4>{'Drop files here or click to upload.'}</H4>
                                <span className='note needsclick'>{'(This is just a demo dropzone. Selected files are not actually uploaded.)'}</span>
                            </div>
                        } />
                </FormGroup>
            </Col>
        </Row>)
}
