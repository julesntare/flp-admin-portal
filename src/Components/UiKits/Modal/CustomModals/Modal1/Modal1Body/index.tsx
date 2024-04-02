import { Card, CardBody, Col } from 'reactstrap';
import BgImage from './BgImage';
import { H5, LI, UL } from '../../../../../../AbstractElements';
import { BrooklynSimmonEmail, BrooklynSimmons } from '../../../../../../Utils/Constants';
import { demoModalData } from '../../../../../../Data/UiKitsData/ModalData';
import { Link } from 'react-router-dom';

function Modal1Body () {
    return (
        <Col xl={12}>
            <Card className="social-profile mb-0">
                <CardBody>
                    <BgImage />
                    <div className="social-details">
                        <H5 className="mb-1">
                            <Link to={`${process.env.PUBLIC_URL}/applications/social-app`}>{BrooklynSimmons}</Link>
                        </H5>
                        <span className="f-light">{BrooklynSimmonEmail}</span>
                        <UL className="social-follow simple-list flex-row justify-content-center">
                            {demoModalData && demoModalData.map((item, index) => (
                                <LI key={index}>
                                    <H5 className="mb-0">{item.class}</H5>
                                    <span className="f-light">{item.text}</span>
                                </LI>

                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Modal1Body;