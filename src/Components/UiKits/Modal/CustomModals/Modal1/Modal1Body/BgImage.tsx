import { Image } from "../../../../../../AbstractElements"
import { dynamicImage } from "../../../../../../Utils";
import SvgIcon from "../../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

function BgImage () {
    return (
        <div className="social-img-wrap">
            <div className="social-img">
                <Image src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" width={68} height={68} />
            </div>
            <div className="edit-icon">
                <SvgIcon iconId='profile-check' />
            </div>
        </div>
    )
}
export default BgImage;