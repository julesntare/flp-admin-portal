import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Badges, H4, H5, LI, UL } from '../../../../../AbstractElements'
import { RootState } from '../../../../../redux-toolkit/store';
import { TodoListType } from '../../../../../Types/TodoType';
import { removeItems, selectItem } from '../../../../../redux-toolkit/reducers/TodoReducer';

export default function TodoList() {
    const { allTodos } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const handleRemoveTodo = (todoId: number, todo: string) => {
        dispatch(removeItems(todoId));
        toast.success(`${todo} deleted`);
    };
    const handleMarkedTodo = (item: TodoListType) => {
        if (item.status === "completed") {
            dispatch(selectItem({id: item.id, status: 'pending', badgeclass: 'danger'}));
            toast.error(item.title + " as Incomplete");
        } else if (item.status === "pending") {
            dispatch(selectItem({id: item.id, status: 'completed', badgeclass: 'success'}));
            toast.success(item.title + " as Complete");
        }
    };
    return (
        <UL className='simple-list' id='todo-list'>
            {allTodos.length > 0
                ? allTodos.map((todo, index) => (
                    <LI className={`task ${todo.status}`} key={index}>
                        <div className='task-container'>
                            <H4 className='task-label'>{todo.title}</H4>
                            <div className='d-flex align-items-center gap-3'>
                                <Badges color={todo.badgeclass}>{todo.badge}</Badges>
                                <H5 className='assign-name m-0'>{todo.date}</H5>
                                <span className='task-action-btn'>
                                    <span className='action-box large delete-btn' title='Delete Task' onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                                        <i className='icon'>
                                            <i className='icon-trash'></i>
                                        </i>
                                    </span>
                                    <span className='action-box large complete-btn' title='Mark Complete' onClick={() => handleMarkedTodo(todo)}>
                                        <i className='icon'>
                                            <i className='icon-check'></i>
                                        </i>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </LI>
                ))
                : ''}
        </UL>
    )
}
