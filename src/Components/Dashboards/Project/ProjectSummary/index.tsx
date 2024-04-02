import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { ProjectSummaryTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../Data/DashboardsData/ECommerceData'
import { projectSummaryColumn, projectSummaryData } from '../../../../Data/DashboardsData/ProjectData'

export default function ProjectSummary() {

    return (
        <Col xl={8} lg={8} md={6}>
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={ProjectSummaryTitle} dropDownClass='icon-dropdown' dropDownList={monthlyDropdownList} dropDownIcon={true} />
                <CardBody className="project-summary">
                    <div className="table-responsive">
                        <DataTable data={projectSummaryData} className='display custom-scrollbar' columns={projectSummaryColumn} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
