import { Card, CardBody, Col, Table } from 'reactstrap'
import { HeadingsTitle } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import { headingSubTitle, headingTableHead } from '../../../../Data/UiKitsData/TypographyData'
import HeadingBody from './HeadingBody'

export default function Headings() {
  return (
    <Col xxl={6}>
      <Card className="height-equal">
        <CommonCardHeader headClass='pb-0' title={HeadingsTitle} subTitle={headingSubTitle}/>
        <CardBody>
          <div className="table-responsive">
            <Table className="mb-0 typography-table">
              <TableHead headeData={headingTableHead}/>
              <HeadingBody/>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
