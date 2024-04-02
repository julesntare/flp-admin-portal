import React, { Fragment, useCallback, useState } from 'react'
import { EmailComposeTitle, EmailTitle } from '../../../../Utils/Constants'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Col, Container, Row } from 'reactstrap'
import EmailLeftAside from '../Common/EmailLeftAside'
import ComposeContent from './ComposeContent'

export default function EmailComposeContainer() {
    const [activeTab, setActiveTab] = useState(1);
    const activeCallback = useCallback((tab: number) => {
        setActiveTab(tab);
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={EmailComposeTitle} parent={EmailTitle} title={EmailComposeTitle} />
            <Container fluid>
                <div className="email-wrap">
                    <Row>
                        <Col xl={3} className='box-col-3'>
                            <EmailLeftAside />
                        </Col>
                        <Col xl={9} className='box-col-80'>
                            <ComposeContent activeCallback={activeCallback} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
