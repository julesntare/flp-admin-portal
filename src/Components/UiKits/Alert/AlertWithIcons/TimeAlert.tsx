import { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { Check, Minute, YourTime } from '../../../../Utils/Constants';

export default function TimeAlert() {
    const [active, setActive] = useState<boolean>(true);
    return (
        <Alerts color='default' className={`border-warning alert-dismissible fade p-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-warning">
                <i className="icon-timer" />
            </div>
            <P>{YourTime} <strong className="txt-dark">{'5'}</strong> {Minute}</P>
            <Btn className="p-0 border-0 me-2 ms-auto" type="button" onClick={() => { setActive(false) }}>
                <span className="bg-warning text-light px-3 py-1">{Check}</span>
            </Btn>
        </Alerts>
    )
}
