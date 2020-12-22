import logo from './logo.svg';
import './App.css';
import BarChart from './Charts/BarChart/BarChart';
import LineChart from './Charts/LineChartDifferentColor/LineChart';
import DonutChart from './Charts/DonutChart/DonutChart';
import MultiLineChart from "./Charts/MultiLineChart/MultiLineChart";
import GroupBarChart from "./Charts/GroupBarChart/GroupBarChart"
 
function App() {
  return (
    <div className="App">
     <GroupBarChart/>
    </div>
  );
}

export default App;
