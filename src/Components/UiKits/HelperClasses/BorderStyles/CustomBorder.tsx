import { Col } from 'reactstrap'
import { CustomBorderTitle } from '../../../../Utils/Constants'
import { customBorderData } from '../../../../Data/UiKitsData/HelperClassData'
import { H3 } from '../../../../AbstractElements'

export default function CustomBorder() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 alert-light-light dark-helper'>
                <H3 className="mb-3">{CustomBorderTitle}</H3>
                {customBorderData && customBorderData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light border ${item.class}`} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}