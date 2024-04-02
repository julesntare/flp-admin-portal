import { Card, CardBody, Col } from 'reactstrap'
import { FontWeightTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { fontWeightData, fontWeightSubTitle } from '../../../../Data/UiKitsData/HelperClassData'

const FontWeight = () => {

    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={FontWeightTitle} subTitle={fontWeightSubTitle} />
                <CardBody>
                    {fontWeightData && fontWeightData.map((item, index) => (
                        <div className="helper-common-box" key={index}>
                            <div className={`${item.class}`}>{item.text}</div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default FontWeight