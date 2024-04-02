import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { UserProfileTitle, UsersTitle } from '../../../../Utils/Constants'
import UserFirstProfile from '../../../BonusUi/Tour/TourMain/UserFirstProfile'
import UserProfile2Style from './UserProfile2Style'
import UserProfile3Style from './UserProfile3Style'
import UserProfile4Style from './UserProfile4Style'
import UserProfile5Style from './UserProfile5Style'

export default function UserProfileContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={UserProfileTitle} parent={UsersTitle} title={UserProfileTitle} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <UserFirstProfile />
                        <UserProfile2Style/>
                        <UserProfile3Style/>
                        <UserProfile4Style/>
                        <UserProfile5Style/>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
