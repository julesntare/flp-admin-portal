import { Fragment, useState } from 'react'
import OtherModal from './OtherModal'
import { Btn, H6, Image, LI, UL } from '../../../../../AbstractElements';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { Cancel, ConnectNewAccount, OpenFirstModal, RemoveAccountText } from '../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../Utils';

function ToggleModalBody () {
    const [open, setOpen] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const toggle2 = () => { setOpen(!open); }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <Fragment>
            <Btn color='dark' onClick={() => { toggle() }}>{OpenFirstModal}</Btn>
            <CommonModal modalData={data}>
                <div className='modal-toggle-wrapper'>
                    <UL className="modal-img simple-list flex-row">
                        <LI>
                            <Image src={dynamicImage(`gif/whatapp.gif`)} alt="whatsapp" width={100} height={100} />
                        </LI>
                        <LI>
                            <Image src={dynamicImage(`gif/instagram.gif`)} alt="instagram" width={100} height={100} />
                        </LI>
                        <LI>
                            <Image src={dynamicImage(`gif/facebook.gif`)} alt="facebook" width={100} height={100} />
                        </LI>
                    </UL>
                    <H6>{RemoveAccountText}</H6>
                    <Btn color='dark' className="rounded-pill w-100 mt-4" onClick={toggle2} >{ConnectNewAccount}</Btn>
                    <Btn color='transparent' className="rounded-pill w-100 dark-toggle-btn" type="button" onClick={toggle}>{Cancel}</Btn>
                </div>
            </CommonModal>
            <OtherModal modal={open} toggle={toggle2} />
        </Fragment>
    )
}
export default ToggleModalBody;