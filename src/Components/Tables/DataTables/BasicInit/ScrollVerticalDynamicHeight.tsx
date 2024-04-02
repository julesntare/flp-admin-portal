import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { ScrollVerticalDynamicHeightTitle } from '../../../../Utils/Constants';
import { dynamicHeightSpan1, dynamicHeightSpan2, scrollVerticalDynamicHeightColumns, scrollVerticalDynamicHeightData } from '../../../../Data/Tables/DataTables/BasicInitData';
import { ScrollVerticalColumnsType } from '../../../../Types/TableType';
import FilterComponent from '../Common/FilterComponent';

export default function ScrollVerticalDynamicHeight() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ScrollVerticalColumnsType[] = scrollVerticalDynamicHeightData.filter(
        (item: ScrollVerticalColumnsType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={ScrollVerticalDynamicHeightTitle} span={dynamicHeightSpan1} span2={dynamicHeightSpan2} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar user-datatable">
                        <DataTable data={filteredItems} columns={scrollVerticalDynamicHeightColumns} striped={true} fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
