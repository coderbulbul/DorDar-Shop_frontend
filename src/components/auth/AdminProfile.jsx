// Import dependencies
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";
import { setCredentials } from "../../slices/authSlice";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";

const AdminProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    formik.setFieldValue("name", userInfo.name);
    formik.setFieldValue("email", userInfo.email);
  }, []);

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // Form validation Schema
    validationSchema: new Yup.ObjectSchema({
      name: Yup.string()
        .min(5, "User Name will be more than 2 character")
        .required("name is required"),
      email: Yup.string()
        .email()
        .min(5, "Email will be more than 2 character")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      confirmPassword: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
    }),
    // submit form
    onSubmit: async () => {
      if (formik.values.password !== formik.values.confirmPassword) {
        toast.error("Passwords do not match");
      } else {
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            name: formik.values.name,
            email: formik.values.email,
            password: formik.values.password,
          }).unwrap();
          dispatch(setCredentials({ ...res }));
          toast.success("Profile Updated");
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      }
    },
  });
  return (
    <section className="bg-slate-200">
      <div className="max-w-sm mx-auto py-3">
        <h1 className="text-center font-bold text-2xl py-3">Update Profile</h1>
        <form onSubmit={formik.handleSubmit} className="relative">
          <div className="text-base flex flex-col">
            {/* Input user name start */}
            <label
              className={`font-bold ${
                formik.touched.name && formik.errors.name ? "text-red-400" : ""
              }`}
            >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.name && formik.errors.name
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please enter your name"
            />
            {/* Input user name end */}
            {/* Input user name start */}
            <label
              className={`font-bold ${
                formik.touched.email && formik.errors.email
                  ? "text-red-400"
                  : ""
              }`}
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.email && formik.errors.email
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please enter email"
            />
            {/* Input user name end */}
            {/* Input user password start */}
            <label
              className={`font-bold ${
                formik.touched.password && formik.errors.password
                  ? "text-red-400"
                  : "Product Price"
              }`}
            >
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : "Password"}
            </label>
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.password && formik.errors.password
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please Your Password"
            />
            {/* Input user password end */}
            {/* Input user confirm password start */}
            <label
              className={`font-bold ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "text-red-400"
                  : "Product Price"
              }`}
            >
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : "Confirm Password"}
            </label>
            <input
              type="text"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please Your Password"
            />
            {/* Input user confirm password end */}

            <button
              type="submit"
              className="py-2 px-3 mb-10 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-bold mt-3 w-full sm:w-auto"
            >
              Update
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
            {isLoading && <Spinner />}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminProfile;
