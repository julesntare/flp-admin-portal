import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import DataTable from 'react-data-table-component';
import { JavascriptSourcedDataTitle } from '../../../../Utils/Constants';
import { ajaxSourcedColumns, javaScriptTableSpan, javaScriptTableSpan2, javascriptSourcedData } from '../../../../Data/Tables/DataTables/DataSourceData';
import FilterComponent from '../Common/FilterComponent';
import { AjaxSourcedColumnsInterface } from '../../../../Types/TableType';

export default function JavascriptSourcedData() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: AjaxSourcedColumnsInterface[] = javascriptSourcedData.filter(
        (item: AjaxSourcedColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan headingClassName="pb-0 card-no-border" heading={JavascriptSourcedDataTitle} span={javaScriptTableSpan} span2={javaScriptTableSpan2} bigHeadingClassName="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        onClear={() => setFilterText('')}
                        filterText={filterText}
                    />
                    <div className="table-responsive custom-scrollbar">
                        <DataTable data={filteredItems} columns={ajaxSourcedColumns} pagination striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
