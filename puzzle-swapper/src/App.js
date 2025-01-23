import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Login from "./pages/loginPage/Login";
import Signup from "./pages/loginPage/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to ="/">Login</Link>
                </li>
                <li>
                    <Link to ="signup">Signup</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route exact="true" path="/" element={<Login />} >
            </Route>
            <Route path="/signup" element={<Signup />}>
            </Route>
        </Routes>

        <Router>
            <Switch>
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
      </div>
    </Router>
  );
}

export default App;
