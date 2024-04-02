import { Card, CardBody, Col, Table } from "reactstrap"
import GridTableHead from "./GridTableHead"
import GridTableBody from "./GridTableBody"
import { GridOptionsTitle } from "../../../../Utils/Constants"
import { gridOptionsSubTitle } from "../../../../Data/UiKitsData/GridData"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function GridOptions() {

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={GridOptionsTitle} subTitle={gridOptionsSubTitle} />
                <CardBody>
                    <div className='table-responsive'>
                        <Table bordered striped>
                            <GridTableHead />
                            <GridTableBody />
                        </Table>
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
