import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TrueFalseManageContextProvider from "./provider/TrueFalseManageContextProvider/TrueFalseManageContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TrueFalseManageContextProvider>
      <App />
    </TrueFalseManageContextProvider>
  </BrowserRouter>
);
