import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StackedBar from "./graphs/StackedBar";
import AreaCharOne from "./graphs/AreaCharOne";
import PieChart from "./graphs/PieChart";
import PieChartSubMerchant from "./graphs/PieChartSubMerchant";
import AreaChartTwo from "./graphs/AreaChartTwo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/stacked-bar" element={<StackedBar />} />
          <Route path="/area-one" element={<AreaCharOne />} />
          <Route path="/area-two" element={<AreaChartTwo />} />
          <Route path="/pie" element={<PieChart />} />
          <Route
            path="/submerchant-pie"
            element={<PieChartSubMerchant merchant={"Gasoline"} />}
          />
          {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
