import './App.css';
import "./index.css";
import Navbar from "./Navigation/Navbar.js";
import Home from './Home-Page/Home';
import SelectIndustry from './View-Solutions/Solution-State';
import YourWork from "./Your-Work/Your-Work.js";
import SelectSoftware from './Software-Packages/Software-Packages';
import Footer from './Footer/Footer';
import CopyrightStrip from './Copyright-Strip/Copyright-Strip';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <YourWork />
      <SelectIndustry />
      <SelectSoftware />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

export default App;
