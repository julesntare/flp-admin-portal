import React from 'react'
import { Card, CardBody, Form } from 'reactstrap'
import Dropzone, { IFileWithMeta } from 'react-dropzone-uploader'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Discard, DropzoneText, Post, PostEditTitle } from '../../../../../Utils/Constants'
import { Btn, H4 } from '../../../../../AbstractElements'
import PostEditForm from './PostEditForm'

export default function PostEdit() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };
    const handleFileSubmit = (successFiles: IFileWithMeta[], allFiles: IFileWithMeta[]): void => {
        allFiles.forEach((f) => f.remove());
    };
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={PostEditTitle} />
            <CardBody className="add-post">
                <PostEditForm />
                <Form className="m-b-20">
                    <Dropzone
                        getUploadParams={getUploadParams}
                        onSubmit={handleFileSubmit}
                        multiple={true}
                        inputContent={
                            <div className="m-0 dz-message needsclick text-center" key={1}>
                                <i className="icon-cloud-up"></i>
                                <H4 className="mb-0">{DropzoneText}</H4>
                            </div>} />
                </Form>
                <div className="btn-showcase text-end">
                    <Btn color='primary'>{Post}</Btn>
                    <Btn color='light'>{Discard}</Btn>
                </div>
            </CardBody>
        </Card>
    )
}
