import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/react-odometer-theme.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { IcoProvider } from "./contexts/context";
// import { ToastContainer } from "react-bootstrap";


ReactDOM.render(
  <IcoProvider>
    {/* <ToastContainer /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IcoProvider>,
  document.getElementById("root")
);
