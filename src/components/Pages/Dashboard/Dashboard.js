import React from "react";
import Grid from "@mui/material/Grid";
import ChartAndTable from "./Chart&Table/ChartAndTable";
import AddTable from "./AdTable/AddTable";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ px: 3 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          textAlign="center"
          sx={{ minHeight: 75 + "vh" }}
        >
          <AddTable />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          textAlign="center"
          sx={{ minHeight: 75 + "vh" }}
        >
          <ChartAndTable />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
