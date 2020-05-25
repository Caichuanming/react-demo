import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "@src/app.js";
import 'antd/dist/antd.min.css'
import CustomRouter from "@src/router/router";

ReactDOM.render(
    <BrowserRouter>
        <App>
            <CustomRouter/>
        </App>
    </BrowserRouter>,
    document.getElementById("root")
);
