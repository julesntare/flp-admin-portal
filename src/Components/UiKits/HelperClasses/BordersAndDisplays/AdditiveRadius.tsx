import { Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { AdditiveRadiusTitle } from "../../../../Utils/Constants";
import { additiveRadiusData } from "../../../../Data/UiKitsData/HelperClassData";

export default function AdditiveRadius() {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <H3 className="mb-3">{AdditiveRadiusTitle}</H3>
                {additiveRadiusData && additiveRadiusData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-radius radius-wrapper ${item.class}`} /><span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}