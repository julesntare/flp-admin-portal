import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Instructions, SecondExampleTitle } from '../../../../Utils/Constants'
import SimpleMdeReact from 'react-simplemde-editor'
import { H3, P } from '../../../../AbstractElements'

export default function SecondExample() {
    const InstructionsText: string = 'Enter text in the area on the left. For more infock the ? (help) icon in the menu.';
    const [editorData, setEditorData] = useState({ heading: Instructions, content: InstructionsText, });
    const handleChange = (value: string) => {
        setEditorData((prevData) => ({
            ...prevData,
            content: value,
        }));
    };
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader headClass='pb-0' title={SecondExampleTitle} />
                    <CardBody>
                        <Row className="editor_container">
                            <Col md={6}>
                                <SimpleMdeReact value={editorData.content} options={{ autofocus: true, spellChecker: false }} onChange={handleChange} />
                            </Col>
                            <Col md={6} className="reader">
                                <H3>{editorData.heading}</H3>
                                <P>{editorData.content}</P>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
