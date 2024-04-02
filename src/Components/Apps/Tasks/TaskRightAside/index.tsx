import React from 'react'
import { Card, Col, TabContent, TabPane } from 'reactstrap'
import { TaskRightAsideProp } from '../../../../Types/TasksType'
import EmptyTask from './Common/EmptyTask'
import { AssignedToMe, Business, DelayedTasks, Holidays, MyTasks, Newsletter, Notification, ThisMonthTasks, ThisWeekTasks, TodayTasks, UpcomingTasks } from '../../../../Utils/Constants'
import TaskList from './TaskList'
import NewTask from './Common/NewTask'

export default function TaskRightAside({ activeTab }: TaskRightAsideProp) {

    return (
        <Col xl={9} md={12} className="box-col-80">
            <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                    <div className="ps-0">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId={1}>
                                <TaskList />
                            </TabPane>
                            <TabPane tabId={2}>
                                <EmptyTask title={TodayTasks} />
                            </TabPane>
                            <TabPane tabId={3}>
                                <EmptyTask title={DelayedTasks} />
                            </TabPane>
                            <TabPane tabId={4}>
                                <EmptyTask title={UpcomingTasks} />
                            </TabPane>
                            <TabPane tabId={5}>
                                <EmptyTask title={ThisWeekTasks} />
                            </TabPane>
                            <TabPane tabId={6}>
                                <EmptyTask title={ThisMonthTasks} />
                            </TabPane>
                            <TabPane tabId={7}>
                                <NewTask title={AssignedToMe} />
                            </TabPane>
                            <TabPane tabId={8}>
                                <NewTask title={MyTasks} />
                            </TabPane>
                            <TabPane tabId={9}>
                                <EmptyTask title={Notification} />
                            </TabPane>
                            <TabPane tabId={10}>
                                <EmptyTask title={Newsletter} />
                            </TabPane>
                            <TabPane tabId={11}>
                                <EmptyTask title={Business} />
                            </TabPane>
                            <TabPane tabId={12}>
                                <EmptyTask title={Holidays} />
                            </TabPane>
                        </TabContent>
                    </div>
                </Card>
            </div>
        </Col>
    )
}
