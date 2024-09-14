// Import dependencies
import AdminSidebar from "../../components/dashboard/AdminSidebar";
import AdminProducts from "../../components/dashboard/AdminProducts";
import AddProduct from "../../pages/dashboard/AddProduct";

const AdminDashboard = () => {
  const path = window.location.pathname;
  let component;
  if (path === "/dashboard") {
    component = <AdminProducts />;
  } else if (path === "/add-product") {
    component = <AddProduct />;
  }
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <AdminSidebar />
        </div>
        <div className="col-span-10">{component}</div>
      </div>
    </>
  );
};

export default AdminDashboard;
