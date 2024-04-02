import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Category, Content, Title, Type } from '../../../../../Utils/Constants';
import { dataTypeahead, postEditRadios } from '../../../../../Data/MiscellaneousData/BlogData';
import SimpleMdeReact from 'react-simplemde-editor';

export default function PostEditForm() {
    return (
        <Form className="needs-validation" noValidate>
            <Row>
                <Col sm={12}>
                    <FormGroup>
                        <Label>{Title}:</Label>
                        <Input type='text' placeholder='Post Title' />
                    </FormGroup>
                    <FormGroup>
                        <Label>{Type}: </Label>
                        <FormGroup className='me-1 d-flex flex-row'>
                            {postEditRadios.map((item) => (
                                <div className="m-checkbox-inline" key={item.id}>
                                    <Label htmlFor={`edo-ani${item.id}`}>
                                        <Input className="radio_animated" id={`edo-ani${item.id}`} type="radio" name="rdo-ani" defaultChecked={item.check === 'checked'} />
                                        {item.text}
                                    </Label>
                                </div>
                            ))}
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Col><Label>{Category}:
                            <Typeahead id="multiple-typeahead" className="mt-2" clearButton defaultSelected={dataTypeahead} labelKey="name" multiple options={dataTypeahead} placeholder="Select Your Name" />
                        </Label></Col>
                    </FormGroup>
                    <div className="email-wrapper">
                        <div className="theme-form">
                            <FormGroup>
                                <Label>{Content}:</Label>
                                <SimpleMdeReact id="editor_container" value='Your Content' options={{ autofocus: true, spellChecker: false }} />
                            </FormGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}
