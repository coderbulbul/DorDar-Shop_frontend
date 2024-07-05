// Import dependencies
import { BsCartCheck } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

// Footer component
const Footer = () => {
  return (
    <footer className="bg-indigo-700 py-8">
      {/* Footer top section start */}
      <div className="flex flex-col md:flex-row justify-around py-4 ">
        <div className="flex flex-row py-2 md:py-0 text-white align-center">
          <div className="text-5xl font-bold px-3 text-center">
            <BsCartCheck />
          </div>
          <div className="flex flex-col">
            <span className="text-xl">FAST AND ONTIME DELIVERY</span>
            <span className="text-sm">
              Delivery for all orders all over country
            </span>
          </div>
        </div>
        <div className="flex flex-row py-2 md:py-0 text-white align-center">
          <div className="text-5xl font-bold px-3 text-center">
            <SlEarphonesAlt />
          </div>
          <div className="flex flex-col">
            <span className="text-xl">24/7 CUSTOMER SUPPORT</span>
            <span className="text-sm">Friendly 24/7 customer support</span>
          </div>
        </div>
        <div className="flex flex-row py-2 md:py-0 text-white align-center">
          <div className="text-5xl font-bold px-3 text-center">
            <AiFillSafetyCertificate />
          </div>
          <div className="flex flex-col">
            <span className="text-xl">QUALITY PRODUCT GUARANTEE</span>
            <span className="text-sm">
              We provide 100% quality products guarantee
            </span>
          </div>
        </div>
      </div>
      {/* Footer top section end */}
      {/* Footer social media section start */}
      <div className="flex flex-row text-white">
        <dir>
          <p>Rajabari - 1822, Elenga, Tangail</p>
          <p>dordarshop@contact</p>
          <p>+088 01711-113662</p>
          <ul className="flex flex-row py-3">
            <li className="p-3 text-lg">
              <FaFacebookF />
            </li>
            <li className="p-3 text-lg">
              <FaTwitter />
            </li>
            <li className="p-3 text-lg">
              <FaLinkedin />
            </li>
            <li className="p-3 text-lg">
              <FaWhatsapp />
            </li>
          </ul>
          <p>@copyright 2024</p>
        </dir>
      </div>
      {/* Footer social media section end */}
    </footer>
  );
};

export default Footer;
