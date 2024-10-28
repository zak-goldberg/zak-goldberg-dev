import { Outlet } from "react-router-dom";
import MyNavbar from "../components/navbar";
import MyFooter from "../components/footer";

export default function Root() {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <MyFooter />
    </>
  );
};
