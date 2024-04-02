import React, { useRef } from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { StudentValidationFormProp } from '../../../../../Types/FormType'
import { AddProfile, PortfolioURL, ProjectDescriptionText } from '../../../../../Utils/Constants'
import { H3 } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function ProfileForm({ formData, updateFormData, selectedImage, }: StudentValidationFormProp) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = () => {
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <Row className="g-3 avatar-upload">
            <Col xs={12}>
                <div>
                    <div className="avatar-edit">
                        <Input onChange={updateFormData} innerRef={fileInputRef} className="d-none" type="file" accept=".png, .jpg, .jpeg" name="imageUpload" />
                        <Label htmlFor="imageUpload" onClick={handleImageChange} />
                    </div>
                    <div className="avatar-preview">
                        <div id="image" style={{ backgroundImage: selectedImage ? `url(${selectedImage})` : `url(${dynamicImage}forms/user.png)`, }} />
                    </div>
                </div>
                <H3>{AddProfile}</H3>
            </Col>
            <Col xs={12}>
                <Label>{PortfolioURL}</Label>
                <Input value={formData.portfolioURL} onChange={updateFormData} name="portfolioURL" type="url" placeholder="https://dunzo" />
            </Col>
            <Col xs={12}>
                <Label>{ProjectDescriptionText}</Label>
                <Input type="textarea" value={formData.projectDescription} onChange={updateFormData} name="projectDescription" rows={2} />
            </Col>
        </Row>
    )
}
