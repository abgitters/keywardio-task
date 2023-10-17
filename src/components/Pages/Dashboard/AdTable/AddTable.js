import React from "react";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import { AdTabledata } from "../../../../Data/Data";

const columns = [
  {
    name: "campaings",
    label: "Campaigns",
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

const options = {
  filterType: "checkbox",
};

const AddTable = () => {
  return (
    <>
      <Paper elevation={2} sx={{ padding: 1, height: "100%" }}>
        <MUIDataTable
          title={"Ad Insights"}
          data={AdTabledata}
          columns={columns}
          options={options}
        />
      </Paper>
    </>
  );
};

export default AddTable;
