import { Card, CardBody, Col } from 'reactstrap'
import { Fragment } from 'react'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { textColorSubTitle, textColorsData } from '../../../../Data/UiKitsData/HelperClassData'

const TextColors = () => {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title='Text Colors' subTitle={textColorSubTitle} />
                <CardBody>
                    {textColorsData && textColorsData.map((item, index) => (
                        <Fragment key={index}>
                            <div className="helper-common-box"></div>
                            <div className={`${item.class}`}>
                                {item.text} <strong>{item.class}</strong> {item.text2}
                            </div>
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default TextColors