import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { UserCardsTitle, UsersTitle } from '../../../../Utils/Constants'
import SocialProfileCards from '../../../../Utils/CommonComponents/UserCommon/SocialProfileCards'

export default function UserCardsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={UserCardsTitle} parent={UsersTitle} title={UserCardsTitle} />
            <Container fluid>
                <Row>
                    <SocialProfileCards colClass='col-xl-4 col-sm-6 col-xxl-3 col-ed-4 box-col-4'/>
                </Row>
            </Container>
        </Fragment>
    )
}
