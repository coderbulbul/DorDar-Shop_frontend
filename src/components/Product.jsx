// Import depencies
import { useState } from "react";
import { Link } from "react-router-dom";
// import { getImageURL } from "../utilities/image-utils";

const Product = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Show limited description in product list
  let productDescription = product.productDescription;
  if (!showFullDescription) {
    // productDescription = productDescription.substring(0, 120);
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <Link to={`/products/${product._id}`}>
        <div className="p-4 text-center items-center">
          <div className="w-full h-full">
            <img className=" h-52 m-auto" src={product.productImageUrl} />
          </div>
          <h1 className="mb-5 text-2xl font-bold">{product.productName}</h1>
          <div className="mb-3">
            {productDescription}
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="px-3 text-indigo-400"
            >
              {showFullDescription ? "Less" : "More.."}
            </button>
          </div>

          <span className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2  mr-3 hover:bg-indigo-600">
            Price: {product.productPrice} /-
          </span>
          <Link
            // onClick={() =>
            //   (window.location.href = "/bkash-payment/" + product._id)
            // }
            to={`/bkash-payment/${product._id}`}
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Buy Now
          </Link>

          <div className="flex flex-col lg:flex-row justify-between mb-4"></div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
