// Import dependencies
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Import Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Import Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage, { productLoader } from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import BkashPayment from "./pages/BkashPayment";
import BkashSuccess from "./pages/BkashSuccess";
import BkashError from "./pages/BkashError";
import Dashboard from "./pages/dashboard/AdminDashboard";
import Login from "./components/auth/AdminLogin";
import Signup from "./components/auth/AdminSignup";
import PrivateRoute from "./components/auth/PrivateRoute";
import AdminProfile from "./components/auth/AdminProfile";

// Component start
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/products/:id"
            element={<ProductPage />}
            loader={productLoader}
          />
          <Route
            path="/bkash-payment/:id"
            element={<BkashPayment />}
            loader={productLoader}
          />
          <Route path="/success" element={<BkashSuccess />} />
          <Route path="/error?" element={<BkashError />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* Auth routes */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Admin dashboard Private Route */}
        <Route element={<AdminLayout />}>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<AdminProfile />} />
            <Route path="/add-product" element={<Dashboard />} />
            <Route path="/orders" element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
