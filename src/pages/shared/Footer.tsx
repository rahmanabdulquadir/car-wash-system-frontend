import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full layout_container border-t-[1px] border-borderColor mt-[50px]">
      <div className="w-full">
        <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-full xl:col-span-3 relative footerBoxGradient rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
            <Link to="/" className="flex justify-center lg:justify-start">
              <span className="italic text-white font-[700] text-[35px]">
                
              </span>
            </Link>
            <p className="text-center text-gray-200">
              Trusted in more than 100 countries & 5 million customers. Have any
              query? contact us we are here for you.
            </p>

            <div className="flex  space-x-4 sm:justify-center  ">
              <Link
                to="/"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md text-primaryMat"
              >
                <FaFacebook />
              </Link>
              <Link
                to={"/"}
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md text-primaryMat"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md text-primaryMat"
              >
                <FaTwitter />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md text-primaryMat"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
            <h4 className="text-lg text-gray-900 font-bold mb-9">
              Get In Touch
            </h4>
            <ul className="text-gray-900 transition-all duration-500 grid gap-6">
              <li>support@xfit.com</li>
              <li>+91 945 658 3256</li>
              <li>Mirpur 404, dhaka</li>
            </ul>
          </div>
          <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
            <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
              Quick Links
            </h4>
            <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
              <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Price Plan</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
              </ul>
              <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">About </Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
            <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
              Newsletter
            </h4>
            <div className="grid gap-7 ">
              <input
                type="text"
                name="email"
                className="py-2 px-4 border border-gray-300 shadow-sm h-14 text-lg text-gray-800 rounded-full w-full  xl:w-64 placeholder:text-gray-400 focus:outline-none"
                placeholder="Enter email.."
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-primaryMat shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-primaryMat/35"
              >
                Subscribe
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-primary/8">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-800 ">
            Copyright@2024 All Right Reserved by
            <Link to="/">XFit</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
