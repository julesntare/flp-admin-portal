import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { childRowsTableColumns, stateSavingTableData } from '../../../../../Data/Tables/DataTables/BasicInitData';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan';
import { ChildRowsTitle } from '../../../../../Utils/Constants';
import { childrenRowsSpan } from '../../../../../Data/Tables/DataTables/APITablesData';
import CustomExpandableComponent from './CustomExpandableComponent';
import FilterComponent from '../../Common/FilterComponent';
import { StateSavingTableColumnsType } from '../../../../../Types/TableType';

export default function ChildRowsTables() {
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
                <CardHeaderSpan headingClassName='pb-0 card-no-border' heading={ChildRowsTitle} span={childrenRowsSpan} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <DataTable data={filteredItems} columns={childRowsTableColumns} pagination expandableRows={true}
                        expandableRowsComponent={CustomExpandableComponent} striped />
                </CardBody>
            </Card>
        </Col>
    )
}
