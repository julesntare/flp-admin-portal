import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { StateSavingTableTitle } from '../../../../Utils/Constants'
import { stateSavingSpan, stateSavingSpan2, stateSavingTableColumns, stateSavingTableData } from '../../../../Data/Tables/DataTables/BasicInitData'
import FilterComponent from '../Common/FilterComponent'
import { StateSavingTableColumnsType } from '../../../../Types/TableType'

export default function StateSavingTable() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: StateSavingTableColumnsType[] = stateSavingTableData.filter(
        (item: StateSavingTableColumnsType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={StateSavingTableTitle} span={stateSavingSpan} span2={stateSavingSpan2} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar">
                        <DataTable data={filteredItems} columns={stateSavingTableColumns} striped={true} pagination />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
