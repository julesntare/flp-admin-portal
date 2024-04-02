import React, { Fragment } from 'react'
import CommonTableComponent from './Common/CommonTableComponent'
import { AlertTitle, BadgesTitle, CheckboxTitle, Inputs, ProgressbarTitle, RadioButtonsTitle, Select, SwitchTitle, TooltipTriggersTitle, UIComponentsTitle } from '../../../../Utils/Constants'
import { alertTableData, badgesTableData, checkboxTableData, inputTableData, progressTableData, radioBoxTableData, selectBoxTableData, switchTableData, toolTipTriggersData, uiComponentTableData } from '../../../../Data/Tables/ReactstrapTablesData/TableComponentsData'

export default function AllTableComponents() {
    return (
        <Fragment>
            <CommonTableComponent title={UIComponentsTitle} data={uiComponentTableData} />
            <CommonTableComponent title={AlertTitle} data={alertTableData} />
            <CommonTableComponent title={ProgressbarTitle} data={progressTableData} tableClass='checkbox-td-width' />
            <CommonTableComponent title={CheckboxTitle} data={checkboxTableData} tableClass='checkbox-td-width' />
            <CommonTableComponent title={RadioButtonsTitle} data={radioBoxTableData} tableClass='radio-first-col-width' />
            <CommonTableComponent title={Select} data={selectBoxTableData} tableClass='checkbox-td-width' />
            <CommonTableComponent title={Inputs} data={inputTableData} tableClass='checkbox-td-width' />
            <CommonTableComponent title={BadgesTitle} data={badgesTableData} />
            <CommonTableComponent title={TooltipTriggersTitle} data={toolTipTriggersData} />
            <CommonTableComponent title={SwitchTitle} data={switchTableData} />
        </Fragment>
    )
}
