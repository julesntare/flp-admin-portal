import React from 'react'
import MailInbox from '../../Common/MailInbox'
import { Card, Col, Row, TabContent } from 'reactstrap'
import { EmailContentProps } from '../../../../../Types/EmailType'
import EmailTab from './EmailTab'

export default function EmailContent({ activeTab, activeCallback }: EmailContentProps) {

    return (
        <div className="email-right-aside">
            <Card className="email-body">
                <Row>
                    <MailInbox activeCallback={activeCallback} />
                    <Col xl={8} md={12} className="box-md-12 pl-0">
                        <div className="email-right-aside">
                            <div className="email-body radius-left">
                                <div className="ps-0">
                                    <TabContent activeTab={activeTab}>
                                        <EmailTab/>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
