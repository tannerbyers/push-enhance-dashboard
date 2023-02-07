import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import {SendNotification} from './pages/SendNotification';

import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';



function App({ signOut, user }) {
  return (
    <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/send-notification" element={<SendNotification />} />
  </Routes>
);
}

export default App;
