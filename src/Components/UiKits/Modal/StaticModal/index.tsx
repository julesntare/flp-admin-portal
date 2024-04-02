import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import StaticModalForm from './StaticModalForm'
import { Btn, H3, P } from '../../../../AbstractElements';
import CommonModal from '../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { DunzoLogin, DunzoLoginText, StaticBackdropModal, StaticModalTitle } from '../../../../Utils/Constants';
import { staticModalSubTitle } from '../../../../Data/UiKitsData/ModalData';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';

function StaticModal () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }
    
    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={StaticModalTitle} subTitle={staticModalSubTitle} />
                <CardBody>
                    <Btn color='primary' onClick={toggle} >{StaticBackdropModal}</Btn>
                    <CommonModal modalData={ModalData}>
                        <div className='modal-toggle-wrapper'>
                            <H3>{DunzoLogin}</H3>
                            <P>{DunzoLoginText}</P>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </CardBody>
            </Card>
        </Col>
    )
}
export default StaticModal;
