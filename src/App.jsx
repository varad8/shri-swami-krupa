import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Layout from "./Layout";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <I18nextProvider i18n={i18n}>
          <Home />
        </I18nextProvider>
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <I18nextProvider i18n={i18n}>
          <Contact />
        </I18nextProvider>
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <I18nextProvider i18n={i18n}>
          <About />
        </I18nextProvider>
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <I18nextProvider i18n={i18n}>
          <Contact />
        </I18nextProvider>
      </Layout>
    ),
  },

  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
