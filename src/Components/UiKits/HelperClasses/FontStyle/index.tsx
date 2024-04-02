import { Card, CardBody, Col } from "reactstrap";
import { FontStyleTitle } from "../../../../Utils/Constants";
import { P } from "../../../../AbstractElements";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { fontStyleData, fontStyleSubTitle } from "../../../../Data/UiKitsData/HelperClassData";

export default function FontStyle() {
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={FontStyleTitle} subTitle={fontStyleSubTitle} />
                <CardBody>
                    {fontStyleData && fontStyleData.map((item, index) => (
                        <P className={item.class} key={index}>
                            {item.text} <strong>.{item.class}</strong> {item.text2}
                        </P>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
