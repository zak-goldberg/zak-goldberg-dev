import { useRouteError } from "react-router-dom";
import MyNavbar from "./navbar";
import MyFooter from "./footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <MyNavbar />
      <div id="error-page">
        <div className="pt-20 min-h-[90vh] flex flex-col space-y-10 justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl">
            404: Page Not Found 🕵🏻
          </h1>
        </div>
      </div>
      <MyFooter />
    </>
  );
};