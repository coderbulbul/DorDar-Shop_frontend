// Import dependencies
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";

const AdminNavbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();

  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Navlink activity control function
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-slate-700 border-b border-slate-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                DorDar Admin
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                {userInfo ? (
                  <div className="text-white">
                    <div
                      onClick={handleClick}
                      className="flex flex-row cursor-pointer"
                    >
                      <div> {userInfo.name}</div>
                      <MdArrowDropDown className="text-2xl " />
                    </div>
                    <ul
                      className={
                        dropdown
                          ? "block bg-white text-black mt-2 rounded fixed"
                          : "hidden"
                      }
                    >
                      <li className="py-2 px-8 text-sm hover:bg-slate-200 rounded">
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                      <li
                        onClick={logoutHandler}
                        className="py-2 px-8 text-sm hover:bg-slate-200 rounded"
                      >
                        <NavLink>Logout</NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <NavLink className="flex flex-shrink-0 mr-4 items-center">
                      <span className="mr-2 text-white">Admin</span>
                      <img
                        className="h-10 w-auto"
                        src={logo}
                        alt="React Jobs"
                      />
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
