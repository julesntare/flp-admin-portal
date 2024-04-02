import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { faqWidgetsData } from '../../../Data/MiscellaneousData/FaqData'
import { H3, P } from '../../../AbstractElements'
import FeatherIconCom from '../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'

export default function FaqWidgets() {
    return (
        <>
            {faqWidgetsData.map((data) => (
                <Col xl={4} md={data.mdClass} className='box-col-4' key={data.id}>
                    <Card className="bg-primary">
                        <CardBody>
                            <div className="d-flex faq-widgets">
                                <div className="flex-grow-1">
                                    <H3>{data.title}</H3>
                                    <P>{data.paragraph}</P>
                                </div>
                                <FeatherIconCom iconName={data.icon}/>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
