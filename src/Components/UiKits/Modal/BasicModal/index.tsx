import { Card, CardBody, Col } from "reactstrap"
import { basicModalSubTitle } from "../../../../Data/UiKitsData/ModalData"
import { BasicModalTitle } from "../../../../Utils/Constants"
import SimpleModal from "./SimpleModal"
import ScrollingModal from "./ScrollingModal"
import TooltipModal from "./TooltipModal"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import DunzoModal from "./DunzoModal"

export default function BasicModal() {
    
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BasicModalTitle} subTitle={basicModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <SimpleModal />
                    <ScrollingModal/>
                    <TooltipModal/>
                    <DunzoModal/>
                </CardBody>
            </Card>
        </Col>
    )
}
