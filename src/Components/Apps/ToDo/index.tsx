import React, { Fragment, useEffect } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, ToDoTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux';
import { fetchTodo } from '../../../redux-toolkit/reducers/TodoReducer';
import LeftTodo from './LeftTodo';
import RightTodo from './RightTodo';
import { AppDispatch } from '../../../redux-toolkit/store';

export default function ToDoContainer() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTodo());
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ToDoTitle} parent={AppsTitle} title={ToDoTitle} />
            <Container fluid className="email-wrap bookmark-wrap todo-wrap">
                <Row>
                    <LeftTodo />
                    <RightTodo />
                </Row>
            </Container>
        </Fragment>
    )
}
