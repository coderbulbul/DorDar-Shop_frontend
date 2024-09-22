// Import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProducts = () => {
  // Declare state
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // fetch products
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://dordar-backend.vercel.app/api/products"
        );
        const data = await res.data.product;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // Delete Product
  const deleteProduct = async (productId) => {
    toast.error("Delete");
    try {
      const response = await axios.delete(
        `https://dordar-backend.vercel.app/products/api/${productId}`
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4 bg-slate-200">
        {/* card header */}
        <div className="bg-slate-300 p-4 rounded text-md font-semibold">
          <h1>All Products</h1>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => (
                    <tr
                      key={product._id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product.productName}
                      </th>
                      <td className="px-6 py-4">{product.productVariant}</td>
                      <td className="px-6 py-4">{product.productPrice}</td>
                      <td className="px-6 py-4">{product.productStock}</td>
                      <td className="px-6 py-4">
                        <a
                          onClick={() => {
                            confirm("Are you sure?")
                              ? deleteProduct(product._id)
                              : "";
                          }}
                          className="font-medium text-red-600 cursor-pointer dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <ToastContainer />
          </div>
        </div>

        {/* card footer */}
      </div>
    </>
  );
};

export default AdminProducts;
