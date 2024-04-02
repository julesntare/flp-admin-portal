import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import { QuickQuestionsTitle } from '../../../../Utils/Constants'
import { faqQuestionsData } from '../../../../Data/MiscellaneousData/FaqData'
import AccordionCard from './AccordionCard'
import FaqRightSide from '../FaqRightSide'

export default function QuickQuestions() {
    return (
        <Col lg={12}>
            <div className="header-faq">
                <H3 className="mb-0">{QuickQuestionsTitle}</H3>
            </div>
            <Row className="default-according style-1 faq-accordion">
                <Col xl={8} lg={6} md={7} className="xl-60">
                    {faqQuestionsData.map((item, i) => (
                        <Fragment key={i}>
                            {item.subTitle && (
                                <div className="faq-title">
                                    <H3>{item.subTitle}</H3>
                                </div>
                            )}
                            {faqQuestionsData[i].titles.map((item, id) => (
                                <AccordionCard key={id} item={item} />
                            ))}
                        </Fragment>
                    ))}
                </Col>
                <FaqRightSide />
            </Row>
        </Col>
    )
}
