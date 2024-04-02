import React, { Fragment, useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, ContactsTitle } from '../../../Utils/Constants'
import LeftContactAside from './LeftContactAside';
import RightContactAside from './RightContactAside';

export default function ContactsContainer() {
    const [activeTab, setActiveTab] = useState(2);
    const changeTab = useCallback((tab: number) => {
        setActiveTab(tab);
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ContactsTitle} parent={AppsTitle} title={ContactsTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <LeftContactAside activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab}/>
                        <RightContactAside activeTab={activeTab} />
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
