import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeTerms, Github, GiveFeedback, LinkedIn, SelectState } from '../../../../../Utils/Constants';
import { BasicInfoFormProps } from '../../../../../Types/FormType';

export default function FeedbackForm({ formData, updateFormData }: BasicInfoFormProps) {
    return (
        <Form className="stepper-three needs-validation custom-input" noValidate >
            <Row className='g-3'>
                <Col sm={6}>
                    <Label>{LinkedIn}<span className="txt-danger">*</span></Label>
                    <Input name="linkedInLink" value={formData.linkedInLink} onChange={updateFormData} type="url" placeholder="https://linkedIn.com/dunzo" />
                </Col>
                <Col sm={6}>
                    <Label>{Github}<span className="txt-danger">*</span></Label>
                    <Input name="gitHubLink" value={formData.gitHubLink} onChange={updateFormData} type="url" placeholder="https://github.com/dunzo" />
                </Col>
                <Col xs={12}>
                    <Label>{SelectState}<span className="txt-danger">*</span></Label>
                    <Input type="select" name="state" onChange={updateFormData}>
                        <option value="" >{'Choose...'}</option>
                        <option value="U.K">{'U.K '}</option>
                        <option value="U.S">{'U.S '}</option>
                        <option value="India">{'India'}</option>
                    </Input>
                </Col>
                <Col xs={12}>
                    <Label>{GiveFeedback}</Label>
                    <Input type="textarea" name="giveFeedBack" value={formData.giveFeedBack} onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="invalidCheck46" name="agreeConditions" onChange={updateFormData} type="checkbox" required/>
                        <Label className="mb-0" htmlFor="invalidCheck46" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
