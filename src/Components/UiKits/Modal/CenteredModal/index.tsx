import { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import CenterdModalBody from './CenteredModalBody'
import { CenteredModalTitle, VerticallyCentered } from '../../../../Utils/Constants';
import { centeredModalSubTitle } from '../../../../Data/UiKitsData/ModalData';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';

function CenteredModal () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    
    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CenteredModalTitle} subTitle={centeredModalSubTitle} />
                <CardBody>
                    <Button color='success' onClick={toggle}>{VerticallyCentered}</Button>
                    <CenterdModalBody modal={modal} toggle={toggle} />
                </CardBody>
            </Card>
        </Col>
    )
}
export default CenteredModal;