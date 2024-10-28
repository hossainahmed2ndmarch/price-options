import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
 const studentMarksData = [
  { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 80 },
  { id: 2, name: "Bob", math: 85, physics: 80, chemistry: 75 },
  { id: 3, name: "Charlie", math: 92, physics: 90, chemistry: 88 },
  { id: 4, name: "David", math: 68, physics: 72, chemistry: 70 },
  { id: 5, name: "Ella", math: 74, physics: 78, chemistry: 76 },
  { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 89 },
  { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 94 },
  { id: 8, name: "Hannah", math: 82, physics: 80, chemistry: 83 },
  { id: 9, name: "Ian", math: 69, physics: 73, chemistry: 71 },
  { id: 10, name: "Jack", math: 77, physics: 79, chemistry: 78 },
];


  return (
    <div className="mb-10">
      <LChart width={1000} height={400} data={studentMarksData}>
       <XAxis dataKey="name"></XAxis>
       <YAxis></YAxis>
        <Line dataKey="math" stroke="black"></Line>
        <Line dataKey="physics" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
