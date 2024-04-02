import { Card, CardBody, Col } from "reactstrap"
import { BorderColorTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { borderColorSubTitle, borderSideColorData } from "../../../../Data/UiKitsData/HelperClassData"

export default function BorderColor() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={BorderColorTitle} subTitle={borderColorSubTitle} />
                <CardBody>
                    <div className='gradient-border'>
                        {borderSideColorData && borderSideColorData.map((item, index) => (
                            <div className="helper-common-box" key={index}>
                                <div className={`helper-box ${item.class} border fill-wrapper`} /><span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
