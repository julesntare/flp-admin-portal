import React, { Fragment } from 'react';
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs';
import { LearningListTitle, LearningTitle } from '../../../../Utils/Constants';
import { Col, Container, Row } from 'reactstrap';
import BlogBoxList from './BlogBoxList';
import BlogBoxGrid from './BlogBoxGrid';
import LearningFilter from '../Common/LearningFilter';

export default function LearningListContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={LearningListTitle} parent={LearningTitle} title={LearningListTitle} />
      <Container fluid>
        <Row className='learning-block'>
          <Col xxl={9} xl={8} className="box-col-8">
            <Row>
              <BlogBoxList />
              <BlogBoxGrid />
            </Row>
          </Col>
          <LearningFilter />
        </Row>
      </Container>
    </Fragment>
  )
}
