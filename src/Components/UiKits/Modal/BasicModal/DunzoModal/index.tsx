import { Fragment, useState } from "react";
import { Btn } from "../../../../../AbstractElements";
import { DunzoSignUp, OpenModalDunzo } from "../../../../../Utils/Constants";
import { Modal, ModalHeader } from "reactstrap";
import FormModalBody from "./FormModalBody";

export default function DunzoModal() {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    return (
        <Fragment>
            <Btn color='primary' type="button" onClick={toggle}>{OpenModalDunzo}</Btn>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <ModalHeader className="justify-content-center border-0">{DunzoSignUp}</ModalHeader>
                    <FormModalBody/>
                </div>
            </Modal>
        </Fragment>
    )
}
