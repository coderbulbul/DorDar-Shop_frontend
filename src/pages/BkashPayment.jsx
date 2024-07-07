import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BkashPayment = () => {
  // Bring ordered productId payment page
  const product = useLoaderData();

  // Payment Type
  const paymentItems = [
    { value: "bkash", label: "Full payment" },
    { value: "cashon", label: "Cash On Delivary (Only delivary charge)" },
  ];
  const [paymentTypeValue, setPaymentTypeValue] = useState("bkash");

  // Bkash payment data state
  const [paymentData, setPaymentData] = useState({
    amount: "",
    orderId: "",
  });

  // Set amount state
  useEffect(() => {
    setPaymentData({
      ...paymentData,
      amount: paymentTypeValue === "bkash" ? product.productPrice + 50 : 50,
      orderId: (Math.random() + 1).toString().substring(5),
    });
  }, [paymentTypeValue]);

  // Formik form validation
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  // Formik initail value
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      thana: "",
      district: "",
      fullAddress: "",
      paymentType: paymentTypeValue,
    },

    // Form validation Schema
    validationSchema: new Yup.ObjectSchema({
      name: Yup.string()
        .min(2, "Name will be more than 2 character")
        .max(20, "Name will be less than 20 character")
        .required("Name is required"),
      contact: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(11, "Phone number is not valid")
        .max(11, "Phone number is not valid")
        .required("Phone number is required"),
      thana: Yup.string()
        .min(2, "Thana will be more than 2 character")
        .max(20, "Thana will be less than 20 character")
        .required("Thana is required"),
      district: Yup.string()
        .min(2, "This field be more than 2 character")
        .max(20, "This field be less than 20 character")
        .required("District is required"),
      fullAddress: Yup.string()
        .min(2, "This field be more than 2 character")
        .required("Address is required"),
    }),

    // onSubmit form
    onSubmit: () => {
      pay();
    },
  });

  const pay = async () => {
    alert("fired");
    try {
      const { data } = await axios.post(
        "https://dordar-backend.vercel.app/bkash/payment/create",
        {
          amount: paymentData.amount,
          orderId: paymentData.orderId,
          customer: formik.values,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      alert(data);
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  return (
    <div className="max-w-96 xl:max-w-screen-sm m-auto py-10 bg-indigo-100 p-10 my-8 rounded-lg">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold py-2 ">Confirm Your Order Now 👏!</h1>
      </div>
      {/* Form start */}
      <form onSubmit={formik.handleSubmit}>
        <div className=" text-base flex flex-col">
          {/* Input field name start */}
          <label
            className={`font-bold ${
              formik.touched.name && formik.errors.name ? "text-red-400" : ""
            }`}
          >
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : "Name"}
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
              formik.touched.name && formik.errors.name ? " border-red-400" : ""
            }`}
            placeholder="Please enter your full name"
          />
          {/* Input field name end */}
          {/* Input field contact start */}
          <label
            className={`font-bold ${
              formik.touched.contact && formik.errors.contact
                ? "text-red-400"
                : "Phone"
            }`}
          >
            {formik.touched.contact && formik.errors.contact
              ? formik.errors.contact
              : "Phone"}
          </label>
          <input
            type="text"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
              formik.touched.contact && formik.errors.contact
                ? " border-red-400"
                : ""
            }`}
            placeholder="Please Your Contact Number"
          />
          {/* Input field contact end */}

          {/* Input field thana start */}
          <label
            className={`font-bold ${
              formik.touched.thana && formik.errors.thana ? "text-red-400" : ""
            }`}
          >
            {formik.touched.thana && formik.errors.thana
              ? formik.errors.thana
              : "Thana"}
          </label>
          <input
            name="thana"
            value={formik.values.thana}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
              formik.touched.thana && formik.errors.thana
                ? " border-red-400"
                : ""
            }`}
            placeholder="Please Enter Your Thana"
          />
          {/* Input field thana end */}

          {/* Input field district end */}
          <label
            className={`font-bold ${
              formik.touched.district && formik.errors.district
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.district && formik.errors.district
              ? formik.errors.district
              : "District"}
          </label>
          <input
            name="district"
            value={formik.values.district}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
              formik.touched.district && formik.errors.district
                ? " border-red-400"
                : ""
            }`}
            placeholder="Please Enter Your District"
          />
          {/* Input field district end */}

          {/* Input field address start */}
          <label
            className={`font-bold ${
              formik.touched.fullAddress && formik.errors.fullAddress
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.fullAddress && formik.errors.fullAddress
              ? formik.errors.fullAddress
              : "Address"}
          </label>
          <input
            name="fullAddress"
            value={formik.values.fullAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
              formik.touched.fullAddress && formik.errors.fullAddress
                ? " border-red-400"
                : ""
            }`}
            placeholder="House no./ Road no. / Word or village"
          />
          {/* Radio button start */}
          <div className="flex flew row">
            <div>
              <label className="font-bold"> Select Payment Method </label>
              {paymentItems.map((paymentItem) => (
                <div key={paymentItem.value}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={paymentItem.value}
                    id={paymentItem.value}
                    checked={paymentTypeValue === paymentItem.value}
                    onChange={(e) => setPaymentTypeValue(e.target.value)}
                    className="mr-2 mb-2 ring-0 text-indigo-500 focus:ring-indigo-500"
                  />
                  <label htmlFor={paymentItem.value}>{paymentItem.label}</label>
                </div>
              ))}
            </div>
            <div className="flex flex-col  p-3 bg-indigo-200 rounded-lg w-1/2 ">
              <span>
                <strong>Price:</strong>
                {paymentTypeValue === "bkash"
                  ? product.productPrice
                  : " Payment after delivary"}{" "}
              </span>
              <span>
                <strong>Delivary Charge:</strong> 120 /-
              </span>

              <span className="mt-2">
                <strong>Total Amount:</strong> {paymentData.amount}
              </span>
            </div>
          </div>
        </div>
        {/* Payement method option end */}

        {/* Submit button start */}
        <button
          type="submit"
          className="py-2 px-3 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-bold mt-3 w-full"
        >
          Order Now
        </button>
        {/* Submit button end */}
      </form>

      {/* Bkash button */}
    </div>
  );
};

export default BkashPayment;
