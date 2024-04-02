import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { dropdownSizingSubTitle } from "../../../../Data/UiKitsData/DropdownData"
import { DropdownSizingTitle } from "../../../../Utils/Constants"
import SmallDropdown from "./SmallDropdown"
import LargeDropdown from "./LargeDropdown"

export default function DropdownSizing() {
    
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={DropdownSizingTitle} subTitle={dropdownSizingSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <LargeDropdown />
                        <SmallDropdown />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

