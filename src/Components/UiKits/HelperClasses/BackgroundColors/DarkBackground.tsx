import { Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { darkBackgroundData } from "../../../../Data/UiKitsData/HelperClassData";
import { DarkBackgroundTitle } from "../../../../Utils/Constants";

export default function DarkBackground() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H3 className="mb-3">{DarkBackgroundTitle}</H3>
                {darkBackgroundData && darkBackgroundData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box ${item.class}`} /><span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}