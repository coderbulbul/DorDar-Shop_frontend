// import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProductPage = () => {
  const { id } = useParams();
  const product = useLoaderData();
  const isStockAvailable = true;

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/products"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <img
                  className="max-w-80 m-auto"
                  src={product.productImageUrl}
                  alt={product.productName}
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center md:text-left">
                <div
                  className={` mb-4 font-bold ${
                    isStockAvailable ? "text-green-500 " : "text-red-500"
                  } `}
                >
                  {isStockAvailable ? (
                    <li>Available</li>
                  ) : (
                    <li>Out of Stock</li>
                  )}
                </div>
                <h1 className="text-3xl font-bold mb-4">
                  {product.productName}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-slate-700 mr-2">
                    <strong>Color:</strong> {product.productVariant}
                  </p>
                  <p className="text-slate-700">
                    <strong>Stock:</strong> {product.productStock} pcs
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Product Description
                </h3>

                <p className="mb-4">{product.productDescription}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Price
                </h3>

                <p className="mb-4">{product.productPrice} /- tk (BDT)</p>
              </div>
            </main>

            {/* Side-bar */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">DorDar Shop</h2>

                <p className="my-2">
                  DorDar shop is a leading gadget selling company specializing
                  in smart watch and digital products. We pride ourselves on
                  delivering high-quality products and services to our clients
                  while fostering a collaborative and innovative work
                  environment.
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  contact@dordarshop.com
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">01711-113662</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">
                  Purchase this products
                </h3>
                <Link
                  to={`/bkash-payment/${product._id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Buy Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// Product data loader
const productLoader = async ({ params }) => {
  const res = await fetch(
    `https://dordarbackend-production.up.railway.app/api/products/${params.id}`
  );
  const data = await res.json();

  return data.product;
};

export { ProductPage as default, productLoader };
