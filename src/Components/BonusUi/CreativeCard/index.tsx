import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, CreativeCardTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BorderLeft from './BorderLeft'
import BorderRight from './BorderRight'
import BorderTop from './BorderTop'
import BorderBottom from './BorderBottom'
import BorderPrimary from './BorderPrimary'
import BorderWarning from './BorderWarning'
import BorderSecondary from './BorderSecondary'
import AbsolutePrimary from './AbsolutePrimary'
import AbsoluteSecondary from './AbsoluteSecondary'

export default function CreativeCardContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CreativeCardTitle} parent={BonusUiTitle} title={CreativeCardTitle} />
            <Container fluid className='list-name'>
                <Row>
                    <BorderLeft />
                    <BorderRight />
                    <BorderTop />
                    <BorderBottom />
                    <BorderPrimary />
                    <BorderWarning />
                    <BorderSecondary />
                    <AbsolutePrimary />
                    <AbsoluteSecondary />
                </Row>
            </Container>
        </Fragment>
    )
}
