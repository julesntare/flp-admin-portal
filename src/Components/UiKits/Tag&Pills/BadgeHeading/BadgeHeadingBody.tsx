import { CardBody } from 'reactstrap'
import { BadgeHeading, Checkout, Inbox, Latest, Login, Logout, Trending } from '../../../../Utils/Constants'
import { Badges, H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'

export default function BadgeHeadingBody() {
    return (
        <CardBody>
            <H1 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} {'1'}
                <Badges color="primary">{Latest}</Badges>
            </H1>
            <H2 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} {'2'}
                <Badges color="secondary">{Trending}</Badges>
            </H2>
            <H3 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} {'3'}
                <Badges color="success">{Checkout}</Badges>
            </H3>
            <H4 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} {'4'}
                <Badges color="warning">{Inbox}</Badges>
            </H4>
            <H5 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} {'5'}
                <Badges color="danger">{Login}</Badges>
            </H5>
            <H6 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} {'6'}
                <Badges color="dark">{Logout}</Badges>
            </H6>
        </CardBody>
    )
}
