import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { DatatableOrderHistoryTitle } from '../../../../../Utils/Constants';
import DatatableSearchBar from './DatatableSearchBar';
import { orderHistoryColumns, orderHistoryDataTable } from '../../../../../Data/AppsData/EcommerceData/OrderHistoryData';

export default function DatatableOrderHistory() {
  const [filteredData, setFilteredData] = useState(orderHistoryDataTable);

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={DatatableOrderHistoryTitle} />
        <CardBody>
          <DatatableSearchBar tableData={orderHistoryDataTable} setFilteredData={setFilteredData} />
          <div className="order-history table-responsive custom-scrollbar">
            <DataTable
              data={filteredData}
              columns={orderHistoryColumns}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
