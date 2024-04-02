import React, { Fragment, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, SocialAppTitle } from '../../../Utils/Constants'
import SocialHeader from './SocialHeader'
import SocialTabContents from './SocialTabContents'

export default function SocialAppContainer() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={SocialAppTitle} parent={AppsTitle} title={SocialAppTitle} />
            <Container fluid>
                <div className="user-profile social-app-profile">
                    <Row>
                        <SocialHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Row>
                    <SocialTabContents activeTab={activeTab} />
                </div>
            </Container>
        </Fragment>
    )
}
