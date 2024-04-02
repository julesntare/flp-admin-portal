import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, SweetAlertTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicAlert from './BasicAlert'
import TitleWithText from './TitleWithText'
import InfoAlert from './InfoAlert'
import WarningAlert from './WarningAlert'
import PikachuAlert from './PikachuAlert'
import QuestionAlert from './QuestionAlert'
import UserNameAlert from './UserNameAlert'
import SuccessMessage from './SuccessMessage'
import DangerAlert from './DangerAlert'
import WarningMode from './WarningMode'
import AutoCloseAlert from './AutoCloseAlert'
import MovieAlert from './MovieAlert'

export default function SweetAlertContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={SweetAlertTitle} parent={BonusUiTitle} title={SweetAlertTitle} />
      <Container fluid>
        <Row>
          <BasicAlert />
          <TitleWithText />
          <InfoAlert />
          <WarningAlert />
          <PikachuAlert />
          <QuestionAlert />
          <UserNameAlert />
          <SuccessMessage />
          <DangerAlert />
          <WarningMode />
          <AutoCloseAlert />
          <MovieAlert />
        </Row>
      </Container>
    </Fragment>
  )
}
