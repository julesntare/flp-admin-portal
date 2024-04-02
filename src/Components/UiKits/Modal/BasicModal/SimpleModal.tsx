import { Fragment, useState } from 'react'
import { Btn, H4, Image, P } from '../../../../AbstractElements'
import CommonModal from '../../../../Utils/CommonComponents/UiKitsCommon/CommonModal'
import { ExploreMore, Simple, SimpleText, Upto } from '../../../../Utils/Constants';
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';
import { dynamicImage } from '../../../../Utils';

export default function SimpleModal() {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        toggler: toggle,
    }
  return (
    <Fragment>
            <Btn color='secondary' onClick={toggle} type="button" >{Simple}</Btn>
            <CommonModal modalData={data}>
                <div className="modal-toggle-wrapper">
                    <H4>{Upto}<strong className="txt-danger">{'85% OFF'}</strong>{SimpleText}</H4>
                    <div className="modal-img">
                        <Image src={dynamicImage(`gif/online-shopping.gif`)} alt="online-shopping" width={100} height={100} />
                    </div>
                    <P className="text-sm-center">
                        {"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}
                    </P>
                    <Btn color='primary' className="d-flex align-items-center gap-2 text-light ms-auto" type="button" onClick={toggle}>
                        {ExploreMore}
                        <FeatherIconCom iconName='ArrowRight' />
                    </Btn>
                </div>
            </CommonModal>
        </Fragment>
    )
}