import { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../../AbstractElements';
import { LargeModalButton, StartYourGoals } from '../../../../../Utils/Constants';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { largeModalData } from '../../../../../Data/UiKitsData/ModalData';
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

function LargeModal() {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Large modal',
        size: 'lg',
        bodyClass: 'dark-modal',
    }
    return (
        <Fragment>
            <Btn color='success' type="button" onClick={toggle}>{LargeModalButton}</Btn>
            <CommonModal modalData={data} >
                <div className="large-modal-header">
                    <FeatherIconCom iconName='ChevronsRight' />
                    <H6>{StartYourGoals}</H6>
                </div>
                <>
                    {largeModalData && largeModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index <= 2 && <P className='modal-padding-space mb-0'>{item.text}</P>}
                            {index > 2 &&
                                <div className="large-modal-body">
                                    <FeatherIconCom iconName='CornerUpRight' />
                                    <P className="ps-1 mb-0">{item.text}</P>
                                </div>
                            }
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </Fragment>
    )
}
export default LargeModal;