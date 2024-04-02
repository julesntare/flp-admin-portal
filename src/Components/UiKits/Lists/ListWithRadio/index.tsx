import { Card, CardBody, Col, Input, Label } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { listRadioData, listWithRadioSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { ListWithRadioTitle } from "../../../../Utils/Constants"
import { LI, UL } from "../../../../AbstractElements"

export default function ListWithRadio() {

    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={ListWithRadioTitle} subTitle={listWithRadioSubTitle} />
                <CardBody>
                    <UL>
                        {listRadioData && listRadioData.map((item, index) => (
                            <LI key={index}>
                                <Input className={`me-2 ${item.class}`} id={`firstRadio${index}`} type="radio" name="listGroupRadio" />
                                <Label className="mb-0" htmlFor={`firstRadio${index}`} check> {item.text}</Label>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}