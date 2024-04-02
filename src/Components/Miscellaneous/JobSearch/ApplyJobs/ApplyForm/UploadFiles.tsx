import React, { Fragment } from 'react'
import { H3 } from '../../../../../AbstractElements'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { UploadCoverLetter, UploadRecommendations, UploadYourCV, UploadYourFiles } from '../../../../../Utils/Constants'

export default function UploadFiles() {
    return (
        <>
            <H3 className="mb-0">{UploadYourFiles}</H3>
            <Form className='theme-form'>
                <Row>
                    <Col>
                        <FormGroup>
                            <Col><Label className='pt-0'>{UploadCoverLetter}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Input type='file' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Col><Label className='pt-0'>{UploadYourCV}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Input type='file' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup className='mb-0'>
                            <Col><Label className='pt-0'>{UploadRecommendations}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Input type='file' />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
