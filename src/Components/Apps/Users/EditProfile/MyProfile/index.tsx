import React from 'react'
import { MyProfileTitle } from '../../../../../Utils/Constants'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Card, CardBody,Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Btn, H3, H6, Image, P } from '../../../../../AbstractElements'
import { Bio, EmailAddress, Password, Save, Website } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'

export default function MyProfile() {
    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' titleClass='card-title' title={MyProfileTitle} />
                <CardBody>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row className="mb-2">
                            <div className="profile-title">
                                <div className="d-flex">
                                    <Image className="img-70 rounded-circle" alt="" src={dynamicImage(`user/7.jpg`)} body={true} />
                                    <div className="flex-grow-1">
                                        <H3 className="mb-1">{'MARK JECNO'}</H3>
                                        <P>{'DESIGNER'}</P>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <FormGroup>
                            <H6><Label>{Bio}</Label></H6>
                            <Input type="textarea" rows="5" defaultValue='On the other hand, we denounce with righteous indignation' />
                        </FormGroup>
                        <FormGroup>
                            <Label>{EmailAddress}</Label>
                            <Input type="email" placeholder="your-email@domain.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label>{Password}</Label>
                            <Input type="password" defaultValue='password' />
                        </FormGroup>
                        <FormGroup>
                            <Label>{Website}</Label>
                            <Input placeholder="http://Uplor .com" type="url" />
                        </FormGroup>
                        <div className="form-footer">
                            <Btn color='primary' className="btn-block">{Save}</Btn>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
