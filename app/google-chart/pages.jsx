import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2019", 1000, 400],
  ["2020", 1170, 460],
  ["2021", 660, 1120],
  ["2022", 1030, 540],
];

const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
};

function GoogleChartExample() {
  return <Chart chartType="AreaChart" width="100%" height="400px" data={data} options={options} />;
}

export default GoogleChartExample;
