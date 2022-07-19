import './App.css';
import "./index.css";
import Navbar from "./Navigation/Navbar.js";
import Solutions from './View-Solutions/View-Solutions';
import YourWork from "./Your-Work/Your-Work.js";


function App() {
  return (
    <div>
      <Navbar />
      <YourWork />
      <Solutions />
    </div>
  );
}

export default App;
