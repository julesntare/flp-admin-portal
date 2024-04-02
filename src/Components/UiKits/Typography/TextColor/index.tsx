import { Card, CardBody, Col } from 'reactstrap'
import { TextColorTitle } from '../../../../Utils/Constants'
import { P } from '../../../../AbstractElements'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { textColorData, textColorSubTitle } from '../../../../Data/UiKitsData/TypographyData'

const TextColor = () => {
   
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={TextColorTitle} subTitle={textColorSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        {textColorData && textColorData.map((item, index) => (
                            <P key={index} className={`mb-0 ${item.class}`}>{item.text}<code>{item.code}</code> {'class'}</P>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
export default TextColor