// Import dependencies
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";

// Declare component
const AdminSidebar = () => {
  return (
    <>
      <section className="h-svh bg-slate-600">
        <ul className="text-white">
          <li className="py-3 px-6 hover:bg-indigo-500 flex flex-row items-center">
            <MdDashboard className="mr-3" />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="py-3 px-6 hover:bg-indigo-500 flex flex-row">
            <RiShoppingBag4Line className="mr-3 text-xl" />
            <Link to="/add-product">Add Product</Link>
          </li>
          <li className="py-3 px-6 hover:bg-indigo-500 flex flex-row">
            <FaShoppingBasket className="mr-3 text-xl" />
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AdminSidebar;
