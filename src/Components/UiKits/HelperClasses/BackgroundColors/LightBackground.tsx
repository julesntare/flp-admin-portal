import { Col } from "reactstrap";
import { LightBackgroundsTitle } from "../../../../Utils/Constants";
import { H3 } from "../../../../AbstractElements";
import { lightBackgroundData } from "../../../../Data/UiKitsData/HelperClassData";

export default function LightBackground() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H3 className="mb-3">{LightBackgroundsTitle}</H3>
                {lightBackgroundData && lightBackgroundData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box ${item.class}`} /><span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}