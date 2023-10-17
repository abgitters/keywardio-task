import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { ChartData } from "../../../../Data/Data";

const COLORS = ["#ff823c", "#0096ff", "#323c46"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 10;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fontSize={20} fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Total ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartView = ({ value }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedData, setSelectedData] = useState([]);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const selectData = () => {
    let defaultVal = value ? value : "clicks";
    let data = ChartData.find((item) => item?.selected == defaultVal);
    setSelectedData(data?.val);
  };

  useEffect(() => {
    selectData();
  }, [value]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ResponsiveContainer width="100%" height={290}>
        <PieChart width={300} height={100}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={selectedData}
            cx="50%"
            cy="50%"
            innerRadius={67}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {Array.isArray(selectedData) &&
              selectedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PieChartView;
