import React, { useState } from 'react'
import { Col, Form, FormGroup, Label, Input, FormFeedback, Row, } from "reactstrap";
import { useForm } from "react-hook-form";
import { ChooseFile, City, DescriptionLabel, FirstName, LooksGood, Password, SubmitButton, Zip } from '../../../../../Utils/Constants';
import DropItem from '../../../Common/DropItem';
import RadioPayMethod from '../../../Common/RadioPayMethod';
import { Btn } from '../../../../../AbstractElements';
import { FormData } from '../../../../../Types/FormType';
import ThemeSelect from './ThemeSelect';

export default function FormCard() {
    const [selectedOption, setSelectedOption] = useState<null | string>(null);
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = () => {
        setValidate(true);
    };
    
    return (
        <Form className="needs-validation custom-input" onSubmit={handleSubmit(onSubmit)}>
            <Row className="g-3">
                <Col xs={12}>
                    <FormGroup>
                        <Label>{FirstName}</Label>
                        <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''} ${validate && !errors.firstName ? 'is-valid' : ''}`} placeholder="Mark" {...register("firstName", { required: "Please enter your valid name" })} />
                        {errors.firstName && (<FormFeedback>{errors.firstName.message}</FormFeedback>)}
                        {validate && !errors.firstName && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label>{Password}</Label>
                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''} ${validate && !errors.password ? 'is-valid' : ''}`} {...register("password", { required: "Please enter your valid password", })} />
                        {errors.password && (<FormFeedback>{errors.password.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <DropItem validate={true} colClass='col-12' className={`${validate && !selectedOption ? "is-invalid" : ""} ${validate && selectedOption ? 'is-valid' : ''}`} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <Col md={6}>
                    <FormGroup>
                        <Label>{City}</Label>
                        <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''} ${validate && !errors.city ? 'is-valid' : ''}`} {...register("city", { required: "Please provide a valid city" })} />
                        {errors.city && (<FormFeedback>{errors.city.message}</FormFeedback>)}
                        {validate && !errors.city && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label>{Zip}</Label>
                        <input type="text" className={`form-control ${errors.zip ? 'is-invalid' : ''} ${validate && !errors.zip ? 'is-valid' : ''}`} {...register('zip', { required: 'Please provide a valid zip' })} />
                        {errors.zip && <FormFeedback>{errors.zip.message}</FormFeedback>}
                        {validate && !errors.zip && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </FormGroup>
                </Col>
                <RadioPayMethod colClass='col-12' />
                <ThemeSelect />
                <Col xs={12}>
                    <FormGroup>
                        <Label>{ChooseFile}</Label>
                        <input type="file" className={`form-control ${errors.file ? 'is-invalid' : ''} ${validate && !errors.file ? 'is-valid' : ''}`} {...register('file', { required: 'Please select a file' })} />
                        {errors.file && <FormFeedback>{errors.file.message}</FormFeedback>}
                        {validate && !errors.file && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label>{DescriptionLabel}</Label>
                        <textarea className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: 'Please enter a message' })} />
                        {errors.description && <FormFeedback>{errors.description.message}</FormFeedback>}
                        {validate && !errors.description && <FormFeedback valid>{LooksGood}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input type="checkbox" id="invalidCheck" required />
                        <Label htmlFor="invalidCheck" check>{'Agree to terms and conditions'}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Btn color="primary">{SubmitButton}</Btn>
                </Col>
            </Row>
        </Form>
    )
}
