import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import PieChartView from "./Pie";
import PieTable from "./PieTable";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChartData } from "../../../../Data/Data";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ChartAndTable = () => {
  const [checked, setChecked] = useState(false);
  const [click, setClick] = React.useState("");

  const handleSelectChange = (event) => {
    setClick(event.target.value);
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Paper elevation={2} sx={{ padding: 1, height: "100%" }}>
        <Grid container flexDirection="column">
          <Grid item alignSelf="end">
            {!checked ? (
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={click}
                    label="Select"
                    onChange={handleSelectChange}
                  >
                    {Array.isArray(ChartData) &&
                      ChartData.map((value, i) => {
                        return (
                          <MenuItem
                            key={value?.selected + i}
                            value={value?.selected}
                          >
                            {value?.selected}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
            ) : null}
          </Grid>
          <Grid item>
            {checked ? <PieTable /> : <PieChartView value={click} />}
          </Grid>
          <Grid item alignSelf="end">
            <Switch checked={checked} onChange={handleChange} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ChartAndTable;
