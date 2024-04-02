import { useState } from "react"
import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { multipleCollapseSubTitle } from "../../../../Data/UiKitsData/AccordionData"
import { Btn } from "../../../../AbstractElements";
import { MultipleCollapseTitle, ToggleBoth, ToggleFirst, ToggleSecond } from "../../../../Utils/Constants";
import CollapseBody from "./CollapseBody";

interface CollapseState {
    collapse1: boolean;
    collapse2: boolean;
}
export default function MultipleCollapse() {
    const [collapseId, setCollapesId] = useState<CollapseState>({ collapse1: false, collapse2: false });
    const toggleCollapse = (collapseIdKey: keyof CollapseState) => {
        setCollapesId(prevState => ({ ...prevState, [collapseIdKey]: !prevState[collapseIdKey] }));
    };
    const handleToggleBothClick = () => {
        setCollapesId(prevState => ({ collapse1: !prevState.collapse1, collapse2: !prevState.collapse2 }));
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={MultipleCollapseTitle} subTitle={multipleCollapseSubTitle} />
                <CardBody>
                    <Btn color='primary me-2' onClick={() => toggleCollapse("collapse1")}>{ToggleFirst}</Btn>
                    <Btn color='warning me-2' onClick={() => toggleCollapse("collapse2")}>{ToggleSecond}</Btn>
                    <Btn color='success' onClick={handleToggleBothClick}>{ToggleBoth}</Btn>
                    <CollapseBody collapseId={collapseId} />
                </CardBody>
            </Card >
        </Col >
    )
}
