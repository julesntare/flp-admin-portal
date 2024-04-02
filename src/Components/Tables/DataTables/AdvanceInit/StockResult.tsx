import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { StockResultTitle } from '../../../../Utils/Constants'
import { StockResultSpan, StockResultSpan2, stockResultTableColumns, stockResultTableData } from '../../../../Data/Tables/DataTables/AdvanceInitData'
import { StockResultColumnType } from '../../../../Types/TableType'
import FilterComponent from '../Common/FilterComponent'

export default function StockResult() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: StockResultColumnType[] = stockResultTableData.filter(
        (item: StockResultColumnType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={StockResultTitle} span={StockResultSpan} span2={StockResultSpan2} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar">
                        <DataTable data={filteredItems} columns={stockResultTableColumns} striped={true} className="display dataTable" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
