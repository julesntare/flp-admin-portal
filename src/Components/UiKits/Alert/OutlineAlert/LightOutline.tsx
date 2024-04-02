import { useState } from "react";
import { Alerts, Btn, P } from "../../../../AbstractElements";
import { LightOutlineText, Oneof, YouTubes } from "../../../../Utils/Constants";
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";

export default function LightOutline() {
    const [active, setActive] = useState<boolean>(true);
    return (
        <Alerts color='default' className={`txt-primary border-primary alert-dismissible fade ${active ? 'show' : 'd-none'}`}>
            <FeatherIconCom iconName='Clock' />
            <P>{Oneof}<strong> {YouTubes} </strong>{LightOutlineText}</P>
            <Btn color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
        </Alerts>
    )
}
