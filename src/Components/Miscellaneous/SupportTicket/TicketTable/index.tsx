import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component';
import { SearchBar } from './SearchBar';
import { ticketTableColumns, ticketTableData } from '../../../../Data/MiscellaneousData/SupportTicketData';

export default function TicketTable() {
    const [filteredData, setFilteredData] = useState(ticketTableData);
    return (
        <Fragment>
            <SearchBar data={ticketTableData} setFilteredData={setFilteredData} />
            <div className="table-responsive custom-scrollbar">
                <DataTable data={filteredData} columns={ticketTableColumns} pagination striped />
            </div>
        </Fragment>
    )
}
