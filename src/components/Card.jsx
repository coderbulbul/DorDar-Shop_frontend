// Import dependensies
import { useState } from "react";
import { Link } from "react-router-dom";
import { getImageURL } from "../utilities/image-utils";

const Card = ({ product }) => {
  // Declare description state
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Show limited description
  let productDescription = product.productDescription;
  if (!showFullDescription) {
    productDescription = productDescription.substring(0, 125) + "..";
  }

  return (
    <Link to={`/products/${product._id}`}>
      <div
        className={` bg-indigo-100 p-6 rounded-lg shadow-md flex sm:flex-row flex-col-reverse`}
      >
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{product.productName}</h2>
          <p className="mt-2 mb-4">{productDescription}</p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-indigo-500"
          >
            {showFullDescription ? "Read Less" : "Read More.."}
          </button>
          <div className="flex flex-row flex-wrap">
            <span className="inline-block bg-indigo-500 text-white rounded-lg px-4 m-3 py-2 hover:bg-indigo-600">
              Price: {product.productPrice}/-
            </span>
            <button
              onClick={() =>
                (window.location.href = "/bkash-payment/" + product._id)
              }
              className="inline-block bg-black text-white rounded-lg px-4 m-3 py-2 hover:bg-gray-700"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="h-auto w-auto rouded-md"
            src={getImageURL(product.productImage)}
            alt="Smart Watch Black"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
