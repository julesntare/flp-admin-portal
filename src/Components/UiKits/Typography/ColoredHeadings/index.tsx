import { Card, CardBody, Col, Table } from 'reactstrap'
import { ColoredHeadingTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import { colorHeadData, headingSubTitle } from '../../../../Data/UiKitsData/TypographyData'
import ColoredHeadBody from './ColoredHeadBody'

export default function ColoredHeadings() {
    return (
        <Col xxl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ColoredHeadingTitle} subTitle={headingSubTitle} />
                <CardBody>
                    <div className='table-responsive'>
                        <Table className='mb-0 typography-table'>
                            <TableHead headeData={colorHeadData} />
                            <ColoredHeadBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
