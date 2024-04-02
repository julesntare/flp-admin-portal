import { Card, CardBody, Col } from 'reactstrap'
import FullscreenOutline from './FullscreenOutline'
import FullscreenBelowsm from './FullscreenBelowsm'
import BelowMd from './BelowMd'
import BelowLg from './BelowLg'
import BelowXl from './BelowXl'
import BelowXXl from './BelowXXl'
import { fullscreenModalSubTitle } from '../../../../Data/UiKitsData/ModalData'
import { FullscreenModalTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'

function FullscreenModal () {
    
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FullscreenModalTitle} subTitle={fullscreenModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <FullscreenOutline />
                    <FullscreenBelowsm />
                    <BelowMd />
                    <BelowLg />
                    <BelowXl />
                    <BelowXXl />
                </CardBody>
            </Card>
        </Col>
    )
}
export default FullscreenModal;