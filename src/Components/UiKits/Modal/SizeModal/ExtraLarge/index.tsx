import { Fragment, useState } from 'react'
import { ExtraLargeModal } from '../../../../../Utils/Constants';
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { fullScreenModalData } from '../../../../../Data/UiKitsData/ModalData';
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

function ExtraLarge () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Extra large modal',
        size: 'xl',
        bodyClass: 'dark-modal',
    }
    return (
        <Fragment>
            <Btn color='info' type="button" onClick={() => { toggle() }}>{ExtraLargeModal}</Btn>
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
export default ExtraLarge;