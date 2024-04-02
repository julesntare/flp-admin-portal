import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { ServerSideProcessingTitle } from '../../../../Utils/Constants';
import { serverSideData, serverSideProcessingColumns, serverSideProcessingSpan, serverSideProcessingSpan2 } from '../../../../Data/Tables/DataTables/DataSourceData';
import FilterComponent from '../Common/FilterComponent';
import { ServerSideProcessingInterface } from '../../../../Types/TableType';

export default function ServerSideProcessing() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ServerSideProcessingInterface[] = serverSideData.filter(
        (item: ServerSideProcessingInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={ServerSideProcessingTitle} span={serverSideProcessingSpan} span2={serverSideProcessingSpan2} bigHeadingClassName="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar">
                        <DataTable data={filteredItems} columns={serverSideProcessingColumns} pagination striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
