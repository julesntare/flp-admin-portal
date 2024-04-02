import React from 'react'
import { Col, Input, InputGroup, Label, Row } from 'reactstrap'
import { StudentValidationFormProp } from '../../../../../Types/FormType'
import { Btn, H5 } from '../../../../../AbstractElements'
import { Github, SocialLinks, Submit, Twitter, WhyThisPositionText } from '../../../../../Utils/Constants'

export default function SocialLinksForm({ formData, updateFormData }: StudentValidationFormProp) {
    return (
        <>
            <H5 className="mb-2">{SocialLinks}</H5>
            <Row className="g-3">
                <Col sm={6}>
                    <Label>{Twitter}</Label>
                    <Input name="twitterUrl" onChange={updateFormData} value={formData.twitterUrl} type="url" placeholder="https://twitter.com" />
                </Col>
                <Col sm={6}>
                    <Label>{Github}</Label>
                    <Input name="gitHubUrl" onChange={updateFormData} value={formData.gitHubUrl} type="url" placeholder="https:/github.com" />
                </Col>
                <Col xs={12}>
                    <InputGroup>
                        <Input name="studentFile" onChange={updateFormData} type="file" />
                        <Btn color="secondary" outline>{Submit}</Btn>
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <Input type="select" onChange={updateFormData} name="positions">
                        <option value={""}>{'Positions'}</option>
                        <option value={"Web Designer"}>{'Web Designer'}</option>
                        <option value={"Software Engineer"}>{'Software Engineer'}</option>
                        <option value={"UI/UX Designer "}>{'UI/UX Designer '}</option>
                        <option value={"Web Developer"}>{'Web Developer'}</option>
                    </Input>
                </Col>
                <Col xs={12}>
                    <Label>{WhyThisPositionText}</Label>
                    <Input type="textarea" name="positionQuestion" onChange={updateFormData} id="questionsTextarea" rows={2} />
                </Col>
            </Row>
        </>
    )
}
