import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderStylesTitle } from "../../../../Utils/Constants";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { borderStyleSubTitle } from "../../../../Data/UiKitsData/HelperClassData";
import CustomBorder from "./CustomBorder";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import TextColors from "./TextColors";

export default function BorderStyles() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BorderStylesTitle} subTitle={borderStyleSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <CustomBorder />
                        <BorderColor />
                        <BorderWidth />
                        <TextColors />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
