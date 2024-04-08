import React, { SetStateAction, useCallback, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import {
  deleteDataTableColumns,
  deleteRowData,
} from "../../../../Data/Tables/DataTables/APITablesData";
import CardHeaderSpan from "../../../../Utils/CommonComponents/CardHeaderSpan";
import { RowsSelectionAndDeletionTitle } from "../../../../Utils/Constants";
import { DeleteRowData } from "../../../../Types/TableType";
import FilterComponent from "../Common/FilterComponent";

interface RowSelectionAndDeletionProps {
  title?: string | undefined;
}

export default function ContentsTable({ title }: RowSelectionAndDeletionProps) {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState(deleteRowData);
  const [selectedRows, setSelectedRows] = useState<DeleteRowData[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback(
    (state: { selectedRows: SetStateAction<DeleteRowData[]> }) => {
      setSelectedRows(state.selectedRows);
    },
    []
  );

  const filteredItems: DeleteRowData[] = data.filter((item: DeleteRowData) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <Col sm={12}>
      <Card>
        <CardHeaderSpan
          headingClassName="pb-0 card-no-border"
          heading={title ?? RowsSelectionAndDeletionTitle}
        />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <FilterComponent
              onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFilterText(e.target.value)
              }
              onClear={() => setFilterText("")}
              filterText={filterText}
            />
            <div className="dataTables_wrapper">
              <DataTable
                columns={deleteDataTableColumns}
                data={filteredItems}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
                striped
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
