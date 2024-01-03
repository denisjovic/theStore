import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes.tsx";
import { StoreContextProvider } from "./context/StoreContext.tsx";
import { configureStore } from "./store/configureStore.ts";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StoreContextProvider>
  </React.StrictMode>
);
