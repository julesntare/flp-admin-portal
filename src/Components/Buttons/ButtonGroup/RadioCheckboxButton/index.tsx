import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { radioCheckboxData } from '../../../../Data/ButtonsData/GroupButtonData'
import CheckBoxButton from './CheckBoxButton'
import RadioBoxButton from './RadioBoxButton'

export default function RadioCheckboxButton() {
    
    return (
        <Col xs={12}>
            {radioCheckboxData.map((item, i) => (
                <Card key={i}>
                    <CardHeaderSpan heading={item.title} headingClassName="card-no-border pb-0" span={item.span} />
                    <CardBody className="btn-group-showcase radio-checkbox">
                        <Row>
                            {item.subButton.map((item, i) =>
                                item.checkBox ? (
                                    <CheckBoxButton item={item} key={i} />
                                ) : (
                                    <RadioBoxButton item={item} key={i} />
                                )
                            )}
                        </Row>
                    </CardBody>
                </Card>
            ))}
        </Col>
    )
}
