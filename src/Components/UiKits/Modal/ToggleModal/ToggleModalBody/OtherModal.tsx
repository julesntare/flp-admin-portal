import { Link } from "react-router-dom";
import { Btn, H4, Image, LI, P, UL } from "../../../../../AbstractElements";
import CommonModal from "../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal";
import { AlreadyLeaving, LogoutText, NotMember, Register, YesLogout } from "../../../../../Utils/Constants";
import { dynamicImage } from "../../../../../Utils";

type propsType = {
    modal: boolean
    toggle: () => void;
}

function OtherModal({ modal, toggle }: propsType) {
    const ModalData = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <CommonModal modalData={ModalData}>
            <div className='modal-toggle-wrapper'>
                <UL className="modal-img simple-list">
                    <LI>
                        <Image src={dynamicImage(`gif/logout.gif`)} alt="logout" body={true} />
                    </LI>
                </UL>
                <H4 className="pt-3 text-center">{AlreadyLeaving}</H4>
                <P className="text-center">{LogoutText}</P>
                <span className="d-block text-center mb-4">
                    {NotMember}
                    <Link className="ms-1" to={`${process.env.PUBLIC_URL}/dashboard/ecommerce`}>{Register}</Link>
                </span>
                <Btn color='dark' className="d-flex m-auto" onClick={toggle} >{YesLogout}</Btn>
            </div>
        </CommonModal>
    )
}
export default OtherModal;