import { Badges, H5, LI } from "../../../../../../AbstractElements";
import FeatherIconCom from "../../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";
import { InvestmentConstant } from "../../../../../../Utils/Constants";

function Investment () {
    return (
        <LI>
            <div className="balance-item danger">
                <div className="balance-icon-wrap">
                    <div className="balance-icon">
                        <FeatherIconCom iconName='ArrowDownRight' />
                    </div>
                </div>
                <div> <span className="f-12 f-light">{InvestmentConstant} </span>
                    <H5>{'78.8K'}</H5>
                    <Badges color="light-danger" className="text-danger rounded-pill">{'-11.67%'}</Badges>
                </div>
            </div>
        </LI>
    )
}
export default Investment;