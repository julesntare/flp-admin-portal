import { Card, CardBody, Col } from 'reactstrap'
import ExtraLarge from './ExtraLarge'
import LargeModal from './LargeModal'
import SmallModal from './SmallModal'
import { sizeModalSubTitle } from '../../../../Data/UiKitsData/ModalData'
import FullScreen from './FullScreen'
import { SizeModalTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'

function SizeModal () {
    
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SizeModalTitle} subTitle={sizeModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <FullScreen />
                    <ExtraLarge />
                    <LargeModal />
                    <SmallModal />
                </CardBody>
            </Card>
        </Col>
    )
}
export default SizeModal;