import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const HomeCards = () => {
  const [products, setProducts] = useState(null);
  // Fetch product list from database
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    // Fetch products
    try {
      const res = await axios.get("https://dordar-backend.vercel.app/products");
      const data = res.data.product;
      setProducts(data);
    } catch (error) {
      console.log("Something went wrong" + error);
    }
  };

  // Import limit
  const recentsProducts = products && products.slice(0, 2);

  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {recentsProducts &&
            recentsProducts.map((product) => {
              return <Card key={product._id} product={product}></Card>;
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
