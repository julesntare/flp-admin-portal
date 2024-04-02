import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, ImageCropperTitle } from '../../../Utils/Constants'
import { Card, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import ImageCropperBody from './ImageCropperBody'

export default function ImageCropperContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={ImageCropperTitle} parent={BonusUiTitle} title={ImageCropperTitle} />
      <Container fluid>
        <div className="img-cropper">
          <Row>
            <Col sm={12}>
              <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={ImageCropperTitle} />
                <ImageCropperBody/>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  )
}
