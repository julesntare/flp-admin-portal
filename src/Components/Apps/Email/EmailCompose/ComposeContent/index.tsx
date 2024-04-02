import React from 'react'
import { CallbackProp } from '../../../../../Types/EmailType'
import { Card, Col, Row } from 'reactstrap'
import MailInbox from '../../Common/MailInbox'
import ComposeMessage from './ComposeMessage'

export default function ComposeContent({ activeCallback }: CallbackProp) {
    return (
        <div className="email-right-aside">
            <Card className="email-body">
                <Row>
                    <MailInbox activeCallback={activeCallback} />
                    <Col xl={8} md={12} className="box-md-12 pr-0">
                        <div className="email-right-aside">
                            <div className="email-body radius-left">
                                <div className="ps-0">
                                    <ComposeMessage />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
