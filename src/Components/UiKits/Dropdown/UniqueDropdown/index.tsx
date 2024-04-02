import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { uniqueDropdownSubTitle } from "../../../../Data/UiKitsData/DropdownData"
import { UniqueDropdownTitle } from "../../../../Utils/Constants"
import DropdownForm from "./DropdownForm"
import DropdownText from "./DropdownText"

export default function UniqueDropdown() {

    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={UniqueDropdownTitle} subTitle={uniqueDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <DropdownForm />
                        <DropdownText />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
