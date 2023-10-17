import React from "react";
import MUIDataTable from "mui-datatables";
import { ChartTableData } from "../../../../Data/Data";

const columns = [
  {
    name: "name",
    label: "Group",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "clicks",
    label: "Clicks",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "cost",
    label: "Cost",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "conversions",
    label: "Conversions",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "revenue",
    label: "Revenue",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const PieTable = () => {
  return (
    <>
      <MUIDataTable
        title={"Ad Insights"}
        data={ChartTableData}
        columns={columns}
      />
    </>
  );
};

export default PieTable;
