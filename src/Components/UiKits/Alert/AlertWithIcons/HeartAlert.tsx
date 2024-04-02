import { useState } from "react"
import { Alerts, Btn, P } from "../../../../AbstractElements"
import { Alert, HertText, NotificationCheck } from "../../../../Utils/Constants"

export default function HeartAlert() {
    const [active, setActive] = useState<boolean>(true)
    return (
        <Alerts color='default' className={`border-danger alert-dismissible fade p-0 mb-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-danger">
                <i className="icon-heart" />
            </div>
            <P>{HertText}<strong className="txt-dark">{NotificationCheck}</strong></P>
            <Btn className="p-0 border-0 me-2 ms-auto" type="button" onClick={() => { setActive(false) }} >
                <span className="bg-danger text-white px-3 py-1" aria-hidden="true">{Alert}</span>
            </Btn>
        </Alerts>
    )
}