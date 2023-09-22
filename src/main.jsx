import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="288758990879-nc2l8s73dfa89igjuvff8u7111j91flv.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
