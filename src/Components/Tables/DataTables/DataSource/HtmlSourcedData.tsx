import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { htmlColumns, htmlColumnsTableData, htmlTableSpan } from '../../../../Data/Tables/DataTables/DataSourceData'
import { HtmlTableTitle } from '../../../../Utils/Constants'
import { HtmlColumnsInterface } from '../../../../Types/TableType'
import FilterComponent from '../Common/FilterComponent'

export default function HtmlSourcedData() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: HtmlColumnsInterface[] = htmlColumnsTableData.filter(
        (item: HtmlColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={HtmlTableTitle} span={htmlTableSpan} bigHeadingClassName="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar">
                        <DataTable data={filteredItems} columns={htmlColumns} striped={true} pagination />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
