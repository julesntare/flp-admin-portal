import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import SimpleMdeReact from 'react-simplemde-editor'
import { Btn, H3 } from '../../../../../../AbstractElements'
import { NewMessage, SendText } from '../../../../../../Utils/Constants'

export default function ComposeMessage() {
    const [text, setText] = useState(`Content`);
    const handleChange = () => { setText("Content"); };
    return (
        <div className="email-compose">
            <div className="email-top compose-border">
                <Row>
                    <Col sm={8} className="xl-50">
                        <H3 className="mb-0">{NewMessage}</H3>
                    </Col>
                    <Col sm={4} className="btn-middle xl-50">
                        <Btn color='primary' className="btn-block btn-mail text-center mb-0 mt-0 w-100">
                            <i className="fa fa-paper-plane me-2"></i> {SendText}
                        </Btn>
                    </Col>
                </Row>
            </div>
            <div className="email-wrapper">
                <Form className="theme-form">
                    <FormGroup>
                        <Label className="col-form-label pt-0">{'To'}</Label>
                        <Input type="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="col-form-label pt-0">{'Subject'}</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="col-form-label pt-0">{'Messages'}</Label>
                        <SimpleMdeReact id="editor_container" onChange={handleChange} value={text} options={{ autofocus: true, spellChecker: false }} />
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}
