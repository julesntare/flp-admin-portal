import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultFileText, DisabledFileText, FileInputTitle, LargeFileText, MultipleFileText, SmallFileText } from '../../../../../Utils/Constants'
import { fileInputSubTitle } from '../../../../../Data/Forms/FormControlsData'

export default function FileInput() {
    
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FileInputTitle} subTitle={fileInputSubTitle} />
                <CardBody>
                    <FormGroup>
                        <Label htmlFor="formFile">{DefaultFileText}</Label>
                        <Input id="formFile" type="file" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="formFileMultiple">{MultipleFileText}</Label>
                        <Input id="formFileMultiple" type="file" multiple />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="formFileDisabled">{DisabledFileText}</Label>
                        <Input id="formFileDisabled" type="file" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="formFileSm">{SmallFileText}</Label>
                        <Input bsSize='sm' id="formFileSm" type="file" />
                    </FormGroup>
                    <div>
                        <Label htmlFor="formFileLg">{LargeFileText}</Label>
                        <Input bsSize='lg' id="formFileLg" type="file" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
