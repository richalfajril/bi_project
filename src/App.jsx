import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import DashboardUser from "./Pages/DashboardUser";
import FormPage from "./Pages/FormPage";
import TableView from "./Pages/TableView";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTwitter);

const PrivateRouteUser = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem("userRole") === "user" ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem("userRole") === "admin" ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard-user" element={<DashboardUser />} />
                <Route path="/dashboard-user/formpage" element={<FormPage />} />
                <Route path="/dashboard-user/tableview" element={<TableView />} />
            </Routes>
        </Router>
    );
};

export default App;
