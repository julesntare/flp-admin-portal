import React from 'react'
import { Table } from 'reactstrap'
import { Link, MoreHorizontal, Trash2 } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import SweetAlert from "sweetalert2";
import { CreatedByMeTableProp } from '../../../../../Types/TasksType'
import { H3, P } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import { RootState } from '../../../../../redux-toolkit/store'
import { removeTask } from '../../../../../redux-toolkit/reducers/TasksReducer';

export default function CreatedByMeTable({ componentRef }: CreatedByMeTableProp) {
    const { allTask } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();
    const deleteTask = (userId: number) => {
        SweetAlert.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ok",
            cancelButtonText: "cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(removeTask(userId));
                SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                SweetAlert.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className="taskadd" ref={componentRef}>
            <div className="table-responsive custom-scrollbar theme-scrollbar">
                <Table>
                    <tbody>
                        {allTask.map((list) => (
                            <tr key={list.id}>
                                <td>
                                    <H3 className="task_title_0">{list.title}</H3>
                                    <P className='project_name_0'>{list.collection}</P>
                                </td>
                                <td>
                                    <P className='task_desc_0'>{list.description}</P>
                                </td>
                                <td>
                                    <a className="me-2" href={Href}><Link /></a>
                                    <a href={Href}><MoreHorizontal /></a>
                                </td>
                                <td><a href={Href} onClick={() => deleteTask(list.id)}><Trash2 /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
