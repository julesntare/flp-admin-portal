import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { AddNewRow, AddRowsTitle } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'
import { addRowsSpan1, addRowsSpan2, addRowsTableColumns, addRowsTableData } from '../../../../Data/Tables/DataTables/APITablesData'
import FilterComponent from '../Common/FilterComponent'
import { AddRowsTableProp } from '../../../../Types/TableType'

export default function AddRowsTables() {
    const [filterText, setFilterText] = useState('');
    const [tableData, setTableData] = useState(addRowsTableData);
    const getRandomFloat = (min: number, max: number) => {
        const genrateRandom = Math.random() * (max - min) + min;
        return parseFloat(genrateRandom.toFixed(2));
    };
    const addNewRow = () => {
        const minimumValue = 10;
        const maximumValue = 100;
        const tempData = {
            column1: tableData[tableData.length - 1].column1 + 10,
            column2: getRandomFloat(minimumValue, maximumValue),
            column3: getRandomFloat(minimumValue, maximumValue),
            column4: getRandomFloat(minimumValue, maximumValue),
            column5: getRandomFloat(minimumValue, maximumValue),
        };
        setTableData([...tableData, tempData]);
    };
    const filteredItems: AddRowsTableProp[] = tableData.filter(
        (item: AddRowsTableProp) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName='pb-0 card-no-border' heading={AddRowsTitle} span={addRowsSpan1} span2={addRowsSpan2} />
                <CardBody>
                    <Btn color='primary' className="mb-3" onClick={addNewRow}>{AddNewRow}</Btn>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <DataTable data={filteredItems} columns={addRowsTableColumns} pagination highlightOnHover striped />
                </CardBody>
            </Card>
        </Col>
    )
}
