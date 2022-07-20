import './App.css';
import "./index.css";
import Navbar from "./Navigation/Navbar.js";
import Home from './Home-Page/Home';
import Solutions from './View-Solutions/View-Solutions';
import SelectIndustry from './View-Solutions/Solution-State';
import YourWork from "./Your-Work/Your-Work.js";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <YourWork />
      <SelectIndustry />
    </div>
  );
}

export default App;
