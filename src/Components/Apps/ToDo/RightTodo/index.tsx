import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, InputGroup } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import TodoList from './TodoList'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../../../redux-toolkit/reducers/TodoReducer';

export default function RightTodo() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleNewTask = () => {
        if (task !== "") {
            dispatch(addNewTodo(task));
            setTask("");

        } else {
            return;
        }
    };
    return (
        <Col xxl={9} xl={8} className="box-col-8">
            <Card>
                <CardHeader className="b-bottom">
                    <div className="todo-list-header">
                        <InputGroup className="new-task-wrapper">
                            <Input className="m-0" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter new task here. . ." />
                            <Btn color='primary' className="add-new-task-btn" onClick={handleNewTask}>{'Add Task'}</Btn>
                        </InputGroup>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="todo">
                        <div className="todo-list-wrapper theme-scrollbar">
                            <div className="todo-list-container">
                                <div className="todo-list-body">
                                    <TodoList />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
