import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, OwlCarouselTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import SlidesOnly from './SlidesOnly'
import WithControls from './WithControls'
import AutoPlayVariant from './AutoPlayVariant'
import MouseOver from './MouseOver'
import WithIndicators from './WithIndicators'
import WithCaption from './WithCaption'
import CrossFade from './CrossFade'
import IndividualCarousel from './IndividualCarousel'
import DisableTouchSwiping from './DisableTouchSwiping'
import DarkVariant from './DarkVariant'

export default function OwlCarouselContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={OwlCarouselTitle} parent={BonusUiTitle} title={OwlCarouselTitle} />
      <Container fluid>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <MouseOver />
          <WithIndicators />
          <WithCaption />
          <CrossFade />
          <IndividualCarousel />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
      </Container>
    </Fragment>
  )
}
