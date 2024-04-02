import { Card, CardBody, Col } from 'reactstrap'
import { BoldFont, Bolder, FontWeightTitle, Lightfont, Mediumbold, Normalfont, fw300, fw400, fw500, fw600, fw700} from '../../../../Utils/Constants'
import { H1, H2, H3, H4, H5 } from '../../../../AbstractElements'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { fontWeightSubTitle } from '../../../../Data/UiKitsData/TypographyData'

const FontWeight = () => {
    
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FontWeightTitle} subTitle={fontWeightSubTitle} />
                <CardBody className='d-flex flex-column gap-3'>
                    <H1 className="f-w-700">{Bolder}<code> {fw700}</code></H1>
                    <H2 className="f-w-600">{BoldFont}<code> {fw600}</code></H2>
                    <H3 className="f-w-500">{Mediumbold}<code> {fw500}</code></H3>
                    <H4 className="f-w-400">{Normalfont}<code> {fw400}</code></H4>
                    <H5 className="f-w-300">{Lightfont}<code> {fw300}</code></H5>
                </CardBody>
            </Card>
        </Col>
    )
}
export default FontWeight