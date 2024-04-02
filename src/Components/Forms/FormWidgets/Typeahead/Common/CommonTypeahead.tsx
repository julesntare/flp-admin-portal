import React, { useState } from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { CommonTypeaheadProps } from '../../../../../Types/FormType';

export default function CommonTypeahead({id, title, subTitle, divId, options, placeholder, labelKey, className }: CommonTypeaheadProps) {
    
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={title} subTitle={subTitle} />
                <CardBody>
                    <div id={divId}>
                        <Form className="theme-form">
                            <div className={className}>
                                <Typeahead id={id} options={options} labelKey={labelKey} placeholder={placeholder} />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
