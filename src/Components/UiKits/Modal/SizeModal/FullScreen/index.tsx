import { Fragment, useState } from 'react';
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { FullScreenModal } from '../../../../../Utils/Constants';
import { fullScreenModalData } from '../../../../../Data/UiKitsData/ModalData';
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

function FullScreen() {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Extra large modal',
        bodyClass: 'dark-modal',
    }
    return (
        <Fragment>
            <Btn color='secondary' type="button" onClick={toggle}>{FullScreenModal}</Btn>
            <CommonModal modalData={data} >
                <>
                    {fullScreenModalData && fullScreenModalData.map((item, index) => (
                        <Fragment key={index}>
                            <div className="large-modal-header">
                                <FeatherIconCom iconName='ChevronRight' />
                                <H6>{item.title}</H6>
                            </div>
                            <P className="modal-padding-space">{item.text}</P>
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </Fragment>
    )
}
export default FullScreen;