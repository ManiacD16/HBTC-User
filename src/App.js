import Header from "./Components/header";
import Sidebar from "./Components/sidebar";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        <MainContent />
      </div>
    </div>
  );
}
export default App;
