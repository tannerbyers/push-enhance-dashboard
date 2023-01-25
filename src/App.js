import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

const apiName = "crudapi";
const path = "/subscription";

API.get(apiName, path);

function App({ signOut, user }) {
  console.log({ user });
  return (
    <div className="App">
      <div className="flex h-screen">
        <div className="w-1/5 bg-gray-500 flex justify-center">
          <ul className="flex flex-col justify-start h-screen text-center">
            <li className="mr-6 m-3">
              <a className="text-white hover:text-gray-800" href="#">
                Home
              </a>
            </li>
            <li className="mr-6 m-3">
              <a className="text-white hover:text-gray-800" href="#">
                Send Notifications
              </a>
            </li>
            <li className="mr-6 m-3">
              <a className="text-white hover:text-gray-800" href="#">
                Check Subscribers
              </a>
            </li>
            <li className="mr-6 m-3">
              <a className="text-white hover:text-gray-800" href="#">
                Analytics
              </a>
            </li>
            <li className="mr-6 m-3 mt-6">
              <a className="text-white hover:text-gray-800" onClick={signOut}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
        <div className="w-3/5 bg-gray-400 "></div>
        <div className="w-1/5 bg-gray-500 flex justify-center ">
          <p>Hello {user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
