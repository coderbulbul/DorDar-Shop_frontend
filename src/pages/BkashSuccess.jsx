// Import dependencies
import { Link } from "react-router-dom";
import { AiFillSafetyCertificate } from "react-icons/ai";

// Bkash success function
const BkashSuccess = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <AiFillSafetyCertificate className="text-indigo-700 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">Payment Successful</h1>
      <p className="text-xl mb-5">Your order Successfully done!👏</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default BkashSuccess;
