import { Card, CardBody, Col, Row } from 'reactstrap'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import { customModalSubTitle } from '../../../../Data/UiKitsData/ModalData'
import { CustomModalsTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'

function CustomModals () {
    
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomModalsTitle} subTitle={customModalSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <Modal1 />
                        <Modal2 />
                        <Modal3 />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CustomModals;