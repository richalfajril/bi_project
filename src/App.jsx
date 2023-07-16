import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import FormPage from "./Pages/FormPage";
import TableView from "./Pages/TableView";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/formpage" element={<FormPage />} />
                <Route path="/dashboard/tableview" element={<TableView />} />
            </Routes>
        </Router>
    );
};

export default App;
