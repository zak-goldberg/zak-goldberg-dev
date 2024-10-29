import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import ErrorPage from "./components/error-page.jsx";
import HomePageContent from "./components/home-page-content.jsx";
import Experience from "./components/experience.jsx";
import ListeningTo from "./components/listening-to.jsx";
import Projects from "./components/projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePageContent />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "listening-to",
        element: <ListeningTo />,
      },
      {
        path: "projects",
        element: <Projects />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
