import { Col } from 'reactstrap'
import { TextColorsTitle } from '../../../../Utils/Constants'
import { textColorData } from '../../../../Data/UiKitsData/HelperClassData'
import { H3 } from '../../../../AbstractElements'

export default function TextColors() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper alert-light-light h-100 dark-helper'>
                <H3 className="mb-3">{TextColorsTitle}</H3>
                {textColorData && textColorData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box helper-text border ${item.class}`} >{'C '}</div>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}