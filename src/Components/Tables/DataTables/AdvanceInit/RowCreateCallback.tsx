import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component'
import { rowCreateCallBackSpan, rowCreateCallBackSpan2, rowCreateCallBackTableColumns, rowCreateCallBackTableData } from '../../../../Data/Tables/DataTables/AdvanceInitData';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { RowCreateCallbackTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';
import { RowCreateCallBackData } from '../../../../Types/TableType';

export default function RowCreateCallback() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: RowCreateCallBackData[] = rowCreateCallBackTableData.filter(
        (item: RowCreateCallBackData) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={RowCreateCallbackTitle} span={rowCreateCallBackSpan} span2={rowCreateCallBackSpan2} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar">
                        <DataTable data={filteredItems} columns={rowCreateCallBackTableColumns} striped={true} pagination className="display dataTable" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
