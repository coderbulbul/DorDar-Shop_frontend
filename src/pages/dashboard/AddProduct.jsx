// Import dependencies
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [file, setFile] = useState();

  const handleImage = async () => {
    toast.success("Image Uploaded");

    const formData = new FormData();
    formData.append("image", file[0]);

    //Post request to upload image to server
    const result1 = await axios.post(
      "https://dordarbackend-production.up.railway.app/upload-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(result1);
    formik.setFieldValue("productImageUrl", result1.data.data.url);
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productVariant: "",
      productDescription: "",
      productImage: "",
      productImageUrl: "",
    },

    // Form validation Schema
    validationSchema: new Yup.ObjectSchema({
      productName: Yup.string()
        .min(2, "Product name will be more than 2 character")
        .max(50, "Product name will be less than 50 character")
        .required("Product name is required"),
      productPrice: Yup.number()
        .min(1, "Product Price is not valid")
        .max(10000, "Product Price is not valid")
        .required("Product Price is required"),
      productVariant: Yup.string()
        .required("Product color or variant required")
        .min(2, "Product color or variant will be more than 2 character"),
      productDescription: Yup.string()
        .min(20, "Product description will be more than 20 character")
        .max(300, "Product description will be less than 300 character")
        .required("Product description is required"),
      productImageUrl: Yup.string(),
    }),
    onSubmit: async () => {
      toast.success("New Product added");
      try {
        const result2 = await axios.post(
          "https://dordar-backend.vercel.app/products",
          formik.values
        );
        console.log(result2);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="bg-slate-100 h-svh">
      <div className="w-2/3 m-auto bg-slate-200 p-4 sm:rounded-lg">
        <h1 className=" text-3xl py-4 font-bold text-center">
          Add New Product🎁
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="text-base flex flex-col">
            {/* Input field name start */}
            <label
              className={`font-bold ${
                formik.touched.productName && formik.errors.productName
                  ? "text-red-400"
                  : ""
              }`}
            >
              {formik.touched.productName && formik.errors.productName
                ? formik.errors.productName
                : "Product Name"}
            </label>
            <input
              type="text"
              name="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.productName && formik.errors.productName
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please enter new product name"
            />
            {/* Input field Product name end */}
            {/* Input field Product Price start */}
            <label
              className={`font-bold ${
                formik.touched.productPrice && formik.errors.productPrice
                  ? "text-red-400"
                  : "Product Price"
              }`}
            >
              {formik.touched.productPrice && formik.errors.productPrice
                ? formik.errors.productPrice
                : "Product Price"}
            </label>
            <input
              type="text"
              name="productPrice"
              value={formik.values.productPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.productPrice && formik.errors.productPrice
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please Your new product Price"
            />
            {/* Input field Product Price end */}
            {/* Input field Product variant */}

            {/* Input field Product variant */}
            <label
              className={`font-bold ${
                formik.touched.productVariant && formik.errors.productVariant
                  ? "text-red-400"
                  : "Product Color/ Variant"
              }`}
            >
              {formik.touched.productVariant && formik.errors.productVariant
                ? formik.errors.productVariant
                : "Product Color/ Variant"}
            </label>
            <input
              type="text"
              name="productVariant"
              value={formik.values.productVariant}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 py-2 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.productVariant && formik.errors.productVariant
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please Your product Color or variant"
            />
            {/* Input field Product description start */}
            <label
              className={`font-bold ${
                formik.touched.productDescription &&
                formik.errors.productDescription
                  ? "text-red-400"
                  : ""
              }`}
            >
              {formik.touched.productDescription &&
              formik.errors.productDescription
                ? formik.errors.productDescription
                : "Product Description"}
            </label>
            <textarea
              name="productDescription"
              value={formik.values.productDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className={`mt-1 py-4 outline-none mb-2 border-1 rounded-lg focus:border-indigo-500 focus:indigo-500 ${
                formik.touched.productDescription &&
                formik.errors.productDescription
                  ? " border-red-400"
                  : ""
              }`}
              placeholder="Please Enter Your Product description"
            />
            {/* Input field Product description end */}
            {/* Input field Product upload start */}

            <label>Product Image</label>
            <input
              type="file"
              name={file}
              onChange={(e) => {
                setFile(e.target.files);
                formik.setFieldValue("productImage", e.target.files[0].name);
              }}
              accept="image/*"
            />
            <button
              onClick={handleImage}
              type="button"
              className={`bg-green-500 text-white font-bold px-6 py-2 mt-2 rounded-md ${
                formik.values.productImageUrl === "" ? " " : " hidden"
              }`}
            >
              Upload Image
            </button>

            {/* Input field Product upload end */}
          </div>
          {/* Submit button start */}
          <button
            type="submit"
            className={`py-2 px-3 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-bold mt-3 w-full ${
              formik.values.productImageUrl !== "" ? " " : "hidden"
            }`}
          >
            Add Productfile
          </button>
          <ToastContainer />
          {/* Submit button end */}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
