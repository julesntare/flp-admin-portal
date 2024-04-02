import React, { useState } from 'react'
import DataTable from "react-data-table-component";
import { productListColumns, productListTableData } from '../../../../Data/AppsData/EcommerceData/ProductListData';
import { ProductSearch } from './ProductSearch';

export default function ProductListTable() {
  const [filteredData, setFilteredData] = useState(productListTableData);
  return (
    <div className="list-product">
      <ProductSearch productdata={productListTableData} setFilteredData={setFilteredData} />
      <DataTable
        data={filteredData}
        columns={productListColumns}
        pagination
      />
    </div>
  )
}
