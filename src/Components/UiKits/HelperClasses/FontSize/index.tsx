import { Card, CardBody, Col } from 'reactstrap'
import { FontSizeTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { fontSizeData, fontSizeSubTitle } from '../../../../Data/UiKitsData/HelperClassData'

const FontSize = () => {

    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FontSizeTitle} subTitle={fontSizeSubTitle} />
                <CardBody>
                    <div className='gradient-border'>
                        {fontSizeData && fontSizeData.map((item, index) => (
                            <div className="font-wrapper border" key={index}>
                                <div className={`${item.class}`}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default FontSize