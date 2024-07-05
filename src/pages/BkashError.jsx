// Import dependencies
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

// Bkash Error function
const BkashError = () => {
  const searchData = new URLSearchParams(window.location.search);
  const message = searchData.get("message");

  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">Payment {message}</h1>
      <p className="text-xl mb-5">Please try again.. </p>

      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default BkashError;
