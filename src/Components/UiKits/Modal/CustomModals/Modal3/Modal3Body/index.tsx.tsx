import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Investment from './Investment'
import CashBack from './CashBack'
import { H5, Image, UL } from '../../../../../../AbstractElements'
import { YourBalance } from '../../../../../../Utils/Constants'
import SvgIcon from '../../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { dynamicImage } from '../../../../../../Utils'

function Modal3Body () {
    return (
        <Col xl={12}>
            <Card className="balance-box mb-0">
                <CardBody>
                    <div className="balance-profile">
                        <div className="balance-img">
                            <Image src={dynamicImage(`dashboard/profile.png`)} alt="user vector" width={64} height={64} />
                            <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`} className='edit-icon'>
                                <SvgIcon iconId='pencil'/>
                            </Link>
                        </div>
                        <span className="f-light d-block">{YourBalance}</span>
                        <H5 className="mt-1">{'$768,987.90'}</H5>
                        <UL className='simple-list flex-row'>
                            <Investment />
                            <CashBack />
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>

    )
}
export default Modal3Body;