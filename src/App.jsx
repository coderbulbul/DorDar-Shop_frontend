import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage, { productLoader } from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import BkashPayment from "./pages/BkashPayment";
import BkashSuccess from "./pages/BkashSuccess";
import BkashError from "./pages/BkashError";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
