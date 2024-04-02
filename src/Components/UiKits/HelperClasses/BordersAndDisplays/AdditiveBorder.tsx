import { Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { AdditiveBorderTitle } from "../../../../Utils/Constants";
import { additiveBorderData } from "../../../../Data/UiKitsData/HelperClassData";

export default function AdditiveBorder() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H3 className='mb-3'>{AdditiveBorderTitle}</H3>
                {additiveBorderData && additiveBorderData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light ${item.class}`} /><span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}