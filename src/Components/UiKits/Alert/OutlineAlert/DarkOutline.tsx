import { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { DarkOutlineText, Welldone } from '../../../../Utils/Constants';
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

export default function DarkOutline() {
    const [active, setActive] = useState<boolean>(true);
    return (
        <Alerts color='default' className={`txt-success border-success outline-2x alert-dismissible fade alert-icons ${active ? 'show' : 'd-none'}`}>
            <FeatherIconCom iconName='ThumbsUp' />
            <P><b> {Welldone}</b>{DarkOutlineText}</P>
            <Btn color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
        </Alerts>
    )
}
