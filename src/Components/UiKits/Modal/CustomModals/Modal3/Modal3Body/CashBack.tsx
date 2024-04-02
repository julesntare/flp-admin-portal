import { Badges, H5, LI } from "../../../../../../AbstractElements";
import FeatherIconCom from "../../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";
import { CashBackText } from "../../../../../../Utils/Constants";

function CashBack () {
    return (
        <LI>
            <div className="balance-item success">
                <div className="balance-icon-wrap">
                    <div className="balance-icon">
                        <FeatherIconCom iconName='ArrowUpRight' />
                    </div>
                </div>
                <div>
                    <span className="f-12 f-light">{CashBackText}</span>
                    <H5>{'19.7K'}</H5>
                    <Badges color="light-success" className="text-success rounded-pill">{'+10.67%'}</Badges>
                </div>
            </div>
        </LI>
    )
}
export default CashBack;