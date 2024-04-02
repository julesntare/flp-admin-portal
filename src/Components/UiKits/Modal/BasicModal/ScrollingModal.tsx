import { Fragment, useState } from 'react'
import CommonModal from '../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { Btn, H6, P } from '../../../../AbstractElements';
import { Scrollingcontent, UXDesigner, WedDesigner } from '../../../../Utils/Constants';
import { scrollingModalData } from '../../../../Data/UiKitsData/ModalData';
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

export default function ScrollingModal() {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Scrolling Modal',
    }
    return (
        <Fragment>
            <Btn color='success' onClick={toggle} type="button" >{Scrollingcontent}</Btn>
            <CommonModal modalData={data}>
                <>
                    <H6>{WedDesigner}</H6>
                    {scrollingModalData && scrollingModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index === 3 && <H6>{UXDesigner}</H6>}
                            <div className={`d-flex ${item.class}`}>
                                <div className="flex-shrink-0">
                                    <FeatherIconCom iconName='ArrowRightCircle' className='svg-modal' />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <P className={index === 3 ? 'pb-4':''}>{item.text}</P>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </Fragment>
    )
}
