import React, { SetStateAction, useCallback, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { deleteDataTableColumns, deleteRowData, rowsSelectionSpan } from '../../../../Data/Tables/DataTables/APITablesData';
import { Btn } from '../../../../AbstractElements';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { DeleteRow, RowsSelectionAndDeletionTitle } from '../../../../Utils/Constants';
import { DeleteRowData } from '../../../../Types/TableType';
import FilterComponent from '../Common/FilterComponent';

export default function RowSelectionAndDeletion() {
    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState(deleteRowData);
    const [selectedRows, setSelectedRows] = useState<DeleteRowData[]>([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const handleRowSelected = useCallback((state: { selectedRows: SetStateAction<DeleteRowData[]> }) => {
        setSelectedRows(state.selectedRows);
    }, []);
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: DeleteRowData) => r.name)}?`)) {
            setToggleCleared(!toggleCleared);
            setData(data.filter((item) => (selectedRows.filter((elem: DeleteRowData) => elem.id === item.id).length > 0 ? false : true)));
            setSelectedRows([]);
        }
    };
    const filteredItems: DeleteRowData[] = data.filter(
        (item: DeleteRowData) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName='pb-0 card-no-border' heading={RowsSelectionAndDeletionTitle} span={rowsSelectionSpan} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Btn color='secondary' className="mb-3" onClick={handleDelete}>{DeleteRow}</Btn>
                        <FilterComponent
                            onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                            onClear={() => setFilterText('')}
                            filterText={filterText}
                        />
                        <div className="dataTables_wrapper">
                            <DataTable columns={deleteDataTableColumns} data={filteredItems} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} striped />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
