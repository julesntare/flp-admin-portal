import { Col } from 'reactstrap'
import { BorderWidthTitle } from '../../../../Utils/Constants'
import { borderWidthData } from '../../../../Data/UiKitsData/HelperClassData'
import { H3 } from '../../../../AbstractElements'

export default function BorderWidth() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 alert-light-light dark-helper'>
                <H3 className="mb-3">{BorderWidthTitle}</H3>
                {borderWidthData && borderWidthData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box border ${item.class}`} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}