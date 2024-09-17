// Import dependensies
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { getImageURL } from "../utilities/image-utils";

const Card = ({ product }) => {
  // Declare description state
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [image, setImage] = useState(null);

  // Show limited description
  let productDescription = product.productDescription;
  if (!showFullDescription) {
    productDescription = productDescription.substring(0, 125) + "..";
  }

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      var res = await axios.get(
        `http://localhost:8000/images/${product.productImage}`
      );
      setImage(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
            <Link
              to={`/bkash-payment/${product._id}`}
              // onClick={() =>
              //   (window.location.href = "/bkash-payment/" + product._id)
              // }

              className="inline-block bg-black text-white rounded-lg px-4 m-3 py-2 hover:bg-gray-700"
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="h-auto w-auto rouded-md"
            // src={image}
            src={`http://localhost:8000/images/${product.productImage}`}
            alt="Smart Watch Black"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
