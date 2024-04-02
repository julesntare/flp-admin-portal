import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { ZeroConfigurationTitle } from '../../../../Utils/Constants'
import { zeroConfigurationSpan, zeroConfigurationSpan2, zeroConfigurationTableColumns, zeroConfigurationTableData } from '../../../../Data/Tables/DataTables/BasicInitData'
import { zeroConfigurationTableColumnsType } from '../../../../Types/TableType'
import FilterComponent from '../Common/FilterComponent'

export default function ZeroConfigurationTable() {
  const [filterText, setFilterText] = useState('');
  const filteredItems: zeroConfigurationTableColumnsType[] = zeroConfigurationTableData.filter(
    (item: zeroConfigurationTableColumnsType) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <Col sm={12}>
      <Card>
        <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={ZeroConfigurationTitle} span={zeroConfigurationSpan} span2={zeroConfigurationSpan2} />
        <CardBody>
          <FilterComponent
            onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
            onClear={() => setFilterText('')}
            filterText={filterText}
          />
          <div className="table-responsive custom-scrollbar">
            <DataTable data={filteredItems} columns={zeroConfigurationTableColumns} pagination highlightOnHover striped />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
