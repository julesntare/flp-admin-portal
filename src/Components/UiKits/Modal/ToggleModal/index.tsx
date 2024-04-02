import { Card, CardBody, Col } from 'reactstrap'
import ToggleModalBody from './ToggleModalBody'
import { toggleModalSubTitle } from '../../../../Data/UiKitsData/ModalData';
import { ToggleModalTitle } from '../../../../Utils/Constants';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';

function ToggleModal () {
    
    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ToggleModalTitle} subTitle={toggleModalSubTitle} />
                <CardBody>
                    <ToggleModalBody />
                </CardBody>
            </Card>
        </Col>
    )
}
export default ToggleModal;