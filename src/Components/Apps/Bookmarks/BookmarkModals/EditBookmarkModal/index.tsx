import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-toolkit/store';
import { setEditModal } from '../../../../../redux-toolkit/reducers/BookmarkReducer';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import EditForm from './EditForm';

export default function EditBookmarkModal() {
    const dispatch = useDispatch();
    const { editModal } = useSelector((state: RootState) => state.bookmark);
    const editToggle = () => {
        dispatch(setEditModal(!editModal));
    };
    return (
        <Modal isOpen={editModal} toggle={editToggle} size='lg'>
            <ModalHeader toggle={editToggle}> {'Edit Bookmark'}</ModalHeader>
            <ModalBody>
                <EditForm editToggle={editToggle} />
            </ModalBody>
        </Modal>
    )
}
