import { Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { SubtractiveBorderTitle } from "../../../../Utils/Constants";
import { subtractiveData } from "../../../../Data/UiKitsData/HelperClassData";

export default function SubtractiveBorder() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H3 className='mb-3'>{SubtractiveBorderTitle}</H3>
                {subtractiveData && subtractiveData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light border ${item.class}`} /><span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}