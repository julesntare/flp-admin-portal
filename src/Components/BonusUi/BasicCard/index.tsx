import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BasicCardTitle, BonusUiTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicCard from './BasicCard'
import FlatCard from './FlatCard'
import WithoutShadow from './WithoutShadow'
import HeadingIcon from './HeadingIcon'
import DarkCard from './DarkCard'
import InfoColorHeader from './InfoColorHeader'
import InfoColorBody from './InfoColorBody'
import InfoColorFooter from './InfoColorFooter'

export default function BasicCardContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BasicCardTitle} parent={BonusUiTitle} title={BasicCardTitle} />
            <Container fluid>
                <Row>
                    <BasicCard />
                    <FlatCard />
                    <WithoutShadow />
                    <HeadingIcon />
                    <DarkCard />
                    <InfoColorHeader />
                    <InfoColorBody />
                    <InfoColorFooter />
                </Row>
            </Container>
        </Fragment>
    )
}
