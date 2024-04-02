import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import { TourProvider } from '@reactour/tour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, TourTitle } from '../../../Utils/Constants'
import { toursteps } from '../../../Data/BonusUiData/TourData';
import TourMain from './TourMain';

export default function TourContainer() {
    const disableBody = (target: Element | null) => {
        if (target instanceof HTMLElement) {
            disableBodyScroll(target);
        }
    };
    const enableBody = (target: Element | null) => {
        if (target instanceof HTMLElement) {
            enableBodyScroll(target);
        }
    };
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TourTitle} parent={BonusUiTitle} title={TourTitle} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <TourProvider steps={toursteps} showPrevNextButtons={true} showCloseButton={true} disableInteraction={true}
                            disableKeyboardNavigation={false} afterOpen={disableBody} beforeClose={enableBody}>
                            <TourMain />
                        </TourProvider>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
