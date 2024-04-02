import { Card, CardBody, Col, Input, Label } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { listCheckboxData, listWithCheckboxSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { ListWithCheckboxTitle } from "../../../../Utils/Constants"
import { LI, UL } from "../../../../AbstractElements"

export default function ListWithCheckbox() {
    
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={ListWithCheckboxTitle} subTitle={listWithCheckboxSubTitle} />
                <CardBody className='dark-list'>
                    <UL>
                        {listCheckboxData && listCheckboxData.map((item, index) => (
                            <LI key={index}>
                                <Input className={`me-2 ${item.class}`} id={`${item.idFor}`} type="checkbox" />
                                <Label className={`mb-0 ${item.labelClass}`} htmlFor={`${item.idFor}`} check>{item.text}</Label>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
