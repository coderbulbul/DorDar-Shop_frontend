import axios from "axios";

const BkashPayment = () => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "/api/bkash/payment/create",
        {
          amount: 50,
          orderId: 1,
        },
        {
          withCredentials: true,
        }
      );
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full text-center mt-10">
      <button
        onClick={pay}
        className="bg-orange-600 font-bold px-3 py-2 rounded-lg"
      >
        Bkash Payment
      </button>
    </div>
  );
};

export default BkashPayment;
