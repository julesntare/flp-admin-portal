import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, TreeViewTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicTree from './BasicTree'
import DisabledTree from './DisabledTree'

export default function TreeViewContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={TreeViewTitle} parent={BonusUiTitle} title={TreeViewTitle} />
      <Container fluid={true}>
        <Row>
          <BasicTree />
          <DisabledTree/>
        </Row>
      </Container>
    </Fragment>
  )
}