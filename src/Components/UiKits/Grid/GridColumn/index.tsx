import { Card, CardBody, Col, Row } from "reactstrap"
import { gridColumnData, gridColumnSubTitle } from "../../../../Data/UiKitsData/GridData"
import { GridColumnTitle } from "../../../../Utils/Constants";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function GridColumn() {

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={GridColumnTitle} subTitle={gridColumnSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row>
                        {gridColumnData && gridColumnData.map((item, index) => (
                            <div className={`text-center ${item.class}`} key={index}>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </Row>
                </CardBody>
            </Card >
        </Col>
    )
}
