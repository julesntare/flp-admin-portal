import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { H6, P } from '../../../../../AbstractElements';
import CommonCardFooter from '../../Common/CommonCardFooter';
import { Basic, BasicInputGroupsTitle, FlexNowrapCodeText, WithTextArea, Wrapping, YourVanityUrl } from '../../../../../Utils/Constants';
import { basicInputGroupsSubTitle } from '../../../../../Data/Forms/FormControlsData';

export default function BasicInputGroups() {
    const wrappingParagraph: string ='Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with';
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BasicInputGroupsTitle} subTitle={basicInputGroupsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <Col md={12}>
                            <div className="card-wrapper border rounded-3 main-custom-form input-group-wrapper">
                                <H6 className="sub-title fw-bold">{Basic}</H6>
                                <InputGroup>
                                    <InputGroupText id="basic-addon1">{"@"}</InputGroupText>
                                    <Input type="text" placeholder="Username" />
                                </InputGroup>
                                <InputGroup>
                                    <Input type="text" placeholder="Recipient's username" />
                                    <InputGroupText id="basic-addon2">{"@example.com"}</InputGroupText>
                                </InputGroup>
                                <Label htmlFor="basic-url">{YourVanityUrl}</Label>
                                <InputGroup>
                                    <InputGroupText id="basic-addon3">{"https://example.com/"}</InputGroupText>
                                    <Input type="text" />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupText>{"$"}</InputGroupText>
                                    <Input type="text" /><InputGroupText>{".00"}</InputGroupText>
                                </InputGroup>
                                <InputGroup>
                                    <Input type="text" placeholder="Username" /><InputGroupText>{"@"}</InputGroupText>
                                    <Input type="text" placeholder="Server" />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupText>{WithTextArea}</InputGroupText>
                                    <Input type="textarea" />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="card-wrapper border rounded-3 input-radius">
                                <H6 className="sub-title fw-bold">{Wrapping} </H6>
                                <P className="f-m-light mb-1">{wrappingParagraph} <code>{FlexNowrapCodeText}</code>.</P>
                                <InputGroup className="flex-nowrap"><InputGroupText id="addon-wrapping">{"@"}</InputGroupText>
                                    <Input type="text" placeholder="Username" />
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CommonCardFooter color1='primary' color2='light' />
            </Card>
        </Col>
    )
}
