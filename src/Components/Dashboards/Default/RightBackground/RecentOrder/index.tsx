import React from 'react'
import { Card, CardBody, Col} from 'reactstrap'
import DataTable from 'react-data-table-component'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { RecentOrderTitle } from '../../../../../Utils/Constants'
import { monthlyDropdownList, recentOrderTableColumns, recentOrderTableData } from '../../../../../Data/DashboardsData/DefaultData'

export default function RecentOrder() {

    return (
        <Col xxl={8} xl={80} md={8} className="box-col-6 proorder-xl-1">
            <Card>
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={RecentOrderTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="pt-0 recent">
                    <div className="table-responsive">
                        <DataTable data={recentOrderTableData} columns={recentOrderTableColumns} className='custom-scrollbar'/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
