import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FirstExampleTitle } from '../../../../Utils/Constants'
import SimpleMdeReact from 'react-simplemde-editor'

export default function FirstExample() {
    const FirstExampleText: string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas congue';

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader headClass='pb-0' title={FirstExampleTitle} />
                    <CardBody>
                        <SimpleMdeReact
                            id='editor_container'
                            value={FirstExampleText}
                            options={{
                                autofocus: true,
                                spellChecker: false,
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
