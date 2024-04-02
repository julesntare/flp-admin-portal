import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Badges, H3, H4, LI, UL } from '../../../AbstractElements'
import { BrowseArticlesHeader, BrowseArticlesTitle, Href } from '../../../Utils/Constants'
import CardHeaderSpan from '../../../Utils/CommonComponents/CardHeaderSpan'
import { Archive, ArrowRight, FileText } from 'react-feather'
import { knowledgeBaseData } from '../../../Data/MiscellaneousData/KnowledgebaseData'

export default function BrowseArticles() {
    return (
        <Col sm={12}>
            <div className="header-faq">
                <H3 className="mb-0">{BrowseArticlesTitle}</H3>
            </div>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CardHeaderSpan heading={BrowseArticlesHeader} />
                        <CardBody>
                            <Row className="browse g-sm-4 g-3">
                                {knowledgeBaseData.map((data) => (
                                    <Col xl={4} md={6} className='box-col-33' key={data.id}>
                                        <div className="browse-articles">
                                            <H4> <span><Archive /></span> {data.title}</H4>
                                            <UL className='simple-list'>
                                                {data.knowledgeList &&
                                                    data.knowledgeList.map((data, index) => (
                                                        <LI key={index}>
                                                            <a href={Href} className={!data.fileTextIcon ? 'f-w-600 font-primary' : ''}>
                                                                {data.fileTextIcon ? (<span><FileText /></span>) : (<span className="f-w-600 font-primary"><ArrowRight /></span>)}
                                                                <span>{data.text}</span>
                                                                {data.badge ? (<Badges color='primary' className="pull-right">{data.badge}</Badges>) : (" ")}
                                                            </a>
                                                        </LI>
                                                    ))}
                                            </UL>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}
