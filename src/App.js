import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import { Amplify, API } from 'aws-amplify'
import awsExports from "./aws-exports";
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function getData() {
  const apiName = 'apib0281fee';
  const path = '/notification';

  return API.get(apiName, path);
}

  const result = async() => {
    return await getData()
  }

function App({ signOut, user }) {

result();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
