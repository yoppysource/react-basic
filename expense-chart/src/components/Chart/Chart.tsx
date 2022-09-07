import { DataPoint } from "../Expenses/ExpensesChart";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart: React.FC<{ dataPoints: DataPoint[] }> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(
    (dataPoint: DataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
