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


import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

const apiName = "crudapi";
const path = "/subscription";

API.get(apiName, path);

function App({ signOut, user }) {
  return (
    <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/send-notification" element={<SendNotification />} />
  </Routes>
);
}

export default withAuthenticator(App);
