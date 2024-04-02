import { Fragment, useState } from 'react'
import { SmallModalButton } from '../../../../../Utils/Constants';
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { fullScreenModalData } from '../../../../../Data/UiKitsData/ModalData';
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

function SmallModal () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Small modal',
        size: 'sm',
        bodyClass: 'dark-modal',
    }
    return (
        <Fragment>
            <Btn color='primary' type="button" onClick={toggle}>{SmallModalButton}</Btn>
            <CommonModal modalData={data} >
                <>
                    {fullScreenModalData && fullScreenModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index <= 2 &&
                                <Fragment key={index}>
                                    <div className="large-modal-header">
                                        <FeatherIconCom iconName='ChevronRight' />
                                        <H6>{item.title}</H6>
                                    </div>
                                    <P className={`modal-padding-space ${index === 2 ? 'mb-0':''}`}>{item.text}</P>
                                </Fragment>
                            }
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </Fragment>
    )
}
export default SmallModal;