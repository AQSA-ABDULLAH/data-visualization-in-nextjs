import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieD3Chart";

const Page = () => {

  const piedata = [
    { name: "A", value: 30 },
    { name: "B", value: 20 },
    { name: "C", value: 50 },
    { name: "D", value: 40 },
  ];

  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 450 },
    { name: "May", value: 600 }
  ];

  return (
    <div>
      <h2>Bar Chart with D3.js</h2>
      <BarChart data={data} />

      <div>
      <h2>Pie Chart with D3.js</h2>
      <PieChart data={piedata} />
    </div>
    </div>
  );
};

export default Page;
