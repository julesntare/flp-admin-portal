import React, { Fragment, useCallback, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { EmailApplicationTitle, EmailTitle } from '../../../../Utils/Constants'
import EmailLeftAside from '../Common/EmailLeftAside'
import EmailContent from './EmailContent'

export default function EmailAppContainer() {
    const [activeTab, setActiveTab] = useState(1);
    const activeCallback = useCallback((tab: number) => {
        setActiveTab(tab);
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={EmailApplicationTitle} parent={EmailTitle} title={EmailApplicationTitle} />
            <Container fluid>
                <div className="email-wrap">
                    <Row>
                        <Col xl={3} className='box-col-30'>
                            <EmailLeftAside />
                        </Col>
                        <Col xl={9} className='box-col-80'>
                            <EmailContent activeTab={activeTab} activeCallback={activeCallback}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
