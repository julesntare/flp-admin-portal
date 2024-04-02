import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader';
import { monthlyDropdownList, recentOrderColumn, recentOrderData } from '../../../../Data/DashboardsData/ECommerceData';
import { RecentOrderTitle } from '../../../../Utils/Constants';

export default function RecentOrder() {

    return (
        <Col xl={6} className="col-xl-50 box-col-12 proorder-xl-3">
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={RecentOrderTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="pt-0 recent">
                    <div className="table-responsive">
                        <DataTable data={recentOrderData} className='display custom-scrollbar' columns={recentOrderColumn}/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
