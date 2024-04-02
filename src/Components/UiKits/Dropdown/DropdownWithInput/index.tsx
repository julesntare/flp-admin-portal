import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import DropdownInputs from "./DropdownInputs"
import { dropdownWithInputSubTitle } from "../../../../Data/UiKitsData/DropdownData"
import { DropdownWithInputTitle } from "../../../../Utils/Constants"

export default function DropdownWithInput() {
    
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={DropdownWithInputTitle} subTitle={dropdownWithInputSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <DropdownInputs />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
