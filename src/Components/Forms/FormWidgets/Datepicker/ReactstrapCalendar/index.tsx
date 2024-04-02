import React from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ReactstrapCalendarTitle } from '../../../../../Utils/Constants'
import { reactstrapCalendarData } from '../../../../../Data/Forms/FormWidgetsData'

export default function ReactstrapCalendar() {
  
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader headClass='pb-0' title={ReactstrapCalendarTitle} />
        <CardBody className="card-wrapper">
          {reactstrapCalendarData.map((data) => (
            <Row className="mb-3" key={data.id}>
              <Col md={3}>
                <Label className="col-form-label">{data.labelText}</Label>
              </Col>
              <Col md={9}>
                <Input className="digits" type={data.type} defaultValue={data.value} />
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}
