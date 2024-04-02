import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alerts, Btn } from "../../../../AbstractElements";
import { LiveAlertText, LiveAlertTitle, ShowLiveAlert } from "../../../../Utils/Constants";
import { liveAlertSubTitle } from "../../../../Data/UiKitsData/AlertData";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function LiveAlert() {
    const [data, setData] = useState<number[]>([])

    const removeValue = (item: number) => {
        setData(data.filter((value, index) => {
            return value !== item;
        }));
    }
    
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass="pb-0" title={LiveAlertTitle} subTitle={liveAlertSubTitle} />
                <CardBody className='live-dark'>
                    {data.map((item: any, index: number) => (
                        <Alerts color='light' className='alert-dismissible' key={index}>
                            <div>{LiveAlertText}</div>
                            <Btn color='transperant' type="button" className="btn-close" onClick={() => { removeValue(item) }} />
                        </Alerts>
                    ))}
                    <Btn color='dark' onClick={() => { setData((prev: any) => [...prev, prev.length + 1]) }}>{ShowLiveAlert}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
