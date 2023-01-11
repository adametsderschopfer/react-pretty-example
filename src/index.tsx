import React from "react";
import {createRoot} from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import NavigationContainer from "./app/pages";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./store";
import "./ui/styles/index.scss";
import "./app/i18n"

const container = document.getElementById("root")!;
const root = createRoot(container);

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <NavigationContainer/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
