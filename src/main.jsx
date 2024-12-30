import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TrueFalseManageContextProvider from "./provider/TrueFalseManageContextProvider/TrueFalseManageContext.jsx";
import { Provider } from "react-redux";
import store from "./reduxToolKit/store/store.js";
// react tostify
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <TrueFalseManageContextProvider>
        <App />
      </TrueFalseManageContextProvider>
    </BrowserRouter>
  </Provider>
);
