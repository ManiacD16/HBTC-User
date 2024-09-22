import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Team from "./Components/Team"; // Import your Team component
import Activity from "./Components/Activity";
import Background from "./Components/Background";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/team" element={<Team />} />
        <Route path="/activity" element={<Activity />} />
        {/* <Route path="/" element={<Background />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
