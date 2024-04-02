//@ts-nocheck
import React, { useState } from 'react'
import { VerticalWizardFormProps } from '../../../../../Types/FormType'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'
import { AgreeTerms, NetBanking, SelectYourBank } from '../../../../../Utils/Constants';
import { netBankingFormBankList } from '../../../../../Data/Forms/FormLayoutData';
import { H3 } from '../../../../../AbstractElements';

export default function NetBankingForm({ formData, updateFormData }: VerticalWizardFormProps) {
    const [open, setOpen] = useState("");
    const toggle = (id: string) => {
        open === id ? setOpen("") : setOpen(id);
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="mb-3 needs-validation" noValidate>
            <Row className='g-3'>
                <Col md={12}>
                    <Accordion open={open} toggle={toggle} className="dark-accordion">
                        <AccordionItem>
                            <AccordionHeader className='bg-light-primary txt-primary' targetId="1">{NetBanking}
                                <FeatherIconCom iconName={open === "1" ? "ChevronDown" : "ChevronUp"} className="svg-color" />
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className="weight-title card-wrapper">
                                <H3 className="sub-title f-14">{SelectYourBank}</H3>
                                <Row className="choose-bank">
                                    {netBankingFormBankList.map((data) => (
                                        <Col sm={6} key={data.id}>
                                            {data.bankList.map((bankNames) => (
                                                <FormGroup check key={bankNames.id} className="radio radio-primary">
                                                    <Input id={bankNames.id} type="radio" name="bankName" onChange={updateFormData} defaultChecked={bankNames === formData.bankName} value={bankNames.text} />
                                                    <Label htmlFor={bankNames.id} check>{bankNames.text}</Label>
                                                </FormGroup>
                                            ))}
                                        </Col>
                                    ))}
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
                <Col xs={12}>
                    <Input type="textarea" name="feedBack" value={formData.feedBack} onChange={updateFormData} placeholder="Your Feedback" />
                </Col>
                <Col xs={12}>
                    <FormGroup className="mb-0" check>
                        <Input id="invalidCheck67" type="checkbox" required />
                        <Label htmlFor="invalidCheck67" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
