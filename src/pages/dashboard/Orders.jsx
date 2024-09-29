// Import dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  // Declare state
  const [orders, setOrders] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://dordarbackend-production.up.railway.app/api/payment/orders"
      );
      const data = await res.data.product;
      console.log(data);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetch products
    fetchOrders();
  }, []);

  //   Delete Product
  const deleteOrders = async (orderId) => {
    toast.error("Delete");
    try {
      const response = await axios.delete(
        `https://dordarbackend-production.up.railway.app/api/payment/orders/${orderId}`
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
          <h1>All Orders</h1>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Customer Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Thana
                  </th>
                  <th scope="col" className="px-4 py-3">
                    District
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Full Address
                  </th>
                  <th scope="col" className="px-4 py-3">
                    contact
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Order Time
                  </th>
                  <th scope="col" className="px-4 py-3">
                    paymentID
                  </th>
                  <th scope="col" className="px-4 py-3">
                    paymentType
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {order.name}
                      </th>
                      <td className="px-4 py-2">{order.thana}</td>
                      <td className="px-4 py-2">{order.district}</td>
                      <td className="px-4 py-2">{order.address}</td>
                      <td className="px-4 py-2">0{order.contact}</td>
                      <td className="px-4 py-2"> {order.date}</td>
                      <td className="px-4 py-2 text-wrap">
                        {" "}
                        {order.paymentID}
                      </td>
                      <td className="px-4 py-2"> {order.paymentType}</td>
                      <td className="px-4 py-2">
                        <button
                          className="px-3 py-2 rounded bg-red-500 text-white font-bold"
                          onClick={() => {
                            deleteOrders(order._id);
                            fetchOrders();
                          }}
                        >
                          Delete
                        </button>
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

export default Orders;
