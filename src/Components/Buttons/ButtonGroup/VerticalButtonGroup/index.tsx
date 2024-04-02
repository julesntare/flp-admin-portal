import React from 'react'
import { ButtonGroup, Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { ButtonHeading, VerticalText, VerticalTitle } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'
import CommonDropdown from '../../Common/CommonDropdown'

export default function VerticalButtonGroup() {
    
    return (
        <Col lg={6}>
            <Card className="height-equal">
                <CardHeaderSpan headingClassName='card-no-border pb-0' heading={VerticalTitle} span={VerticalText} />
                <CardBody className="btn-group-wrapper">
                    <ButtonGroup vertical>
                        <Btn color="primary">{ButtonHeading}</Btn>
                        <Btn color="secondary">{ButtonHeading}</Btn>
                        <ButtonGroup>
                            <CommonDropdown color="success" />
                        </ButtonGroup>
                        <Btn color="info" className="b-r-0">{ButtonHeading}</Btn>
                        <Btn color="warning" className="b-r-0">{ButtonHeading}</Btn>
                        <CommonDropdown color="danger" className="b-r-0"/>
                        <CommonDropdown color="light" />
                    </ButtonGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
