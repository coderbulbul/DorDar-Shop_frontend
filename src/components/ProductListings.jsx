import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";

const ProductListings = ({ isHome = false }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    // Fetch all product from db
    const fetchProducts = async () => {
      const apiUrl = isHome
        ? "https://dordar-backend.vercel.app/api/products/?_limit=3"
        : "https://dordar-backend.vercel.app/api/products";
      try {
        const res = await axios.get(apiUrl);
        const data = res.data.product;
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    // Call fetchProducts function
    fetchProducts();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Products" : "All Products"}
          </h2>

          {loading ? (
            <div className="flex align-center justify-center h-28">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products &&
                products.map((product) => {
                  return <Product key={product._id} product={product} />;
                })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductListings;
