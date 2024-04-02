import React, { Fragment, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, TasksTitle } from '../../../Utils/Constants'
import TaskLeftAside from './TaskLeftAside'
import TaskRightAside from './TaskRightAside'

export default function TasksContainer() {
  const [activeTab, setActiveTab] = useState(1);
  const activeToggle = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <Fragment>
      <Breadcrumbs pageTitle={TasksTitle} parent={AppsTitle} title={TasksTitle} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <TaskLeftAside activeToggle={activeToggle} activeTab={activeTab} />
            <TaskRightAside activeTab={activeTab} />
          </Row>
        </div>
      </Container>
    </Fragment>
  )
}
