import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import SweetAlert from "sweetalert2";
import { ContactDetailsProps, UserCallbackUserType, UserProps } from '../../../../../../Types/ContactType'
import { H3, Image, LI, P, UL } from '../../../../../../AbstractElements'
import { Delete, Edit, EmailAddress, General, History, Href, MobileNo, Name, Print } from '../../../../../../Utils/Constants'
import EmptyData from '../../Common/EmptyData'
import { deletedUser, setTempId } from '../../../../../../redux-toolkit/reducers/ContactReducer';
import PrintModal from './PrintModal';

export default function ContactDetails({ selectedUser, userEditCallback, historyToggle }: ContactDetailsProps) {
    const [printModal, setPrintModal] = useState(false);
    const togglePrintModal = () => setPrintModal(!printModal);
    const dispatch = useDispatch();
    const toggleCallback = useCallback((toggle: boolean) => {
        setPrintModal(toggle);
    }, []);

    const editUsers = (usersData: UserCallbackUserType) => {
        if (usersData.id !== undefined) {
            dispatch(setTempId(usersData.id));
            userEditCallback(true, usersData as UserProps);
        }
    };
    const onDeleteUser = (userId: number | undefined) => {
        if (userId !== undefined) {
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
                    dispatch(deletedUser(userId));
                    SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
                } else {
                    SweetAlert.fire("Your imaginary file is safe!");
                }
            });
        } else { console.error("User ID is undefined"); }
    };
    return (
        <div>
            {selectedUser ? (
                <div className="profile-mail">
                    <div className="d-flex">
                        <Image className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={`${selectedUser.avatar}`} alt="" />
                        <div className="flex-grow-1 mt-0">
                            <H3><span className="first_name_0">{selectedUser.name} </span><span className="last_name_0">{selectedUser.surname}</span></H3>
                            <P className="email_add_0">{selectedUser.email}</P>
                            <UL className='simple-list flex-row'>
                                <LI><a href={Href} onClick={() => editUsers(selectedUser)}>{Edit}</a></LI>
                                <LI><a href={Href} onClick={() => onDeleteUser(selectedUser.id)}>{Delete}</a></LI>
                                <LI><a href={Href} onClick={() => historyToggle()}>{History}</a></LI>
                                <LI><a href={Href} onClick={() => togglePrintModal()}>{Print}</a></LI>
                            </UL>
                        </div>
                    </div>
                    <div className="email-general">
                        <H3 className="mb-3">{General}</H3>
                        <UL className='simple-list'>
                            <LI>{Name} <span className="font-primary first_name_0">{selectedUser.name}</span></LI>
                            <LI>{MobileNo}<span className="font-primary mobile_num_0">{selectedUser.mobile}</span></LI>
                            <LI>{EmailAddress}<span className="font-primary email_add_0">{selectedUser.email}</span></LI>
                        </UL>
                    </div>
                </div>
            ) : (<EmptyData />)}
            {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
        </div>
    )
}
