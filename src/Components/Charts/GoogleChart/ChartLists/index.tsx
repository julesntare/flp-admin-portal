import React, { Fragment } from 'react'
import CommonChart from '../Common/CommonChart'
import { AreaChartTitle1, AreaChartTitle2, BarChart2Title, ColumnChartTitle1, ColumnChartTitle2, LineChartTitle, PieChart, WordTreeTitle } from '../../../../Utils/Constants'
import { googleChartData } from '../../../../Data/ChartsData/GoogleChartData'
import GanttChart from './GanttChart'
import ComboChart from './ComboChart'

export default function ChartLists() {
  
  return (
    <Fragment>
      <CommonChart data={googleChartData.areaChart1} bodyClass='p-0' title={AreaChartTitle1} />
      <CommonChart data={googleChartData.areaChart2} bodyClass='p-0' title={AreaChartTitle2} />
      <CommonChart data={googleChartData.columnChart1} title={ColumnChartTitle1} />
      <CommonChart data={googleChartData.columnChart2} title={ColumnChartTitle2} />
      <GanttChart/>
      <CommonChart data={googleChartData.lineChart} title={LineChartTitle} colClass="col-sm-12 box-col-12"/>
      <ComboChart/>
      <CommonChart data={googleChartData.barChart2} title={BarChart2Title} colClass="col-sm-12 col-xl-6 box-col-12"/>
      <CommonChart data={googleChartData.wordTreeChart} divClass='word-tree' title={WordTreeTitle} colClass="col-sm-12 col-xl-6 box-col-12"/>
      <CommonChart data={googleChartData.pieChart1} bodyClass='p-0' title={`${PieChart}1`}/>
      <CommonChart data={googleChartData.pieChart2} bodyClass='p-0' title={`${PieChart}2`}/>
      <CommonChart data={googleChartData.pieChart3} bodyClass='p-0' title={`${PieChart}3`}/>
      <CommonChart data={googleChartData.pieChart4} bodyClass='p-0' title={`${PieChart}4`}/>
    </Fragment>
  )
}
