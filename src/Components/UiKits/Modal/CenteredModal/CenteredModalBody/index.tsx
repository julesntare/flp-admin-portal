import { Btn, H4, Image, LI, P, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Utils";
import CommonModal from "../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal";
import { CenteredError, Close } from "../../../../../Utils/Constants";

type propsType = {
    modal: boolean;
    toggle: () => void;
}

function CenterdModalBody ({ modal, toggle }: propsType) {
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
    }
    return (
        <CommonModal modalData={data} >
            <div className="modal-toggle-wrapper">
                <UL className="modal-img simple-list">
                    <LI>
                        <Image src={dynamicImage(`gif/danger.gif`)} alt="error"/>
                    </LI>
                </UL>
                <H4 className="text-center pb-2">{CenteredError}</H4>
                <P className="text-center">{  "Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</P>
                <Btn color='secondary' className="d-flex m-auto" type="button" onClick={toggle}>{Close}</Btn>
            </div>
        </CommonModal>
    )
}
export default CenterdModalBody;