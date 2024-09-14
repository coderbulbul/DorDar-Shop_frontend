// Import dependencies
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/dashboard/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
