import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const webAppUrl = import.meta.env.VITE_WEB_APP;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const handleSubscribe = async () => {
    try {
      // Disable the button during the data-saving process
      setLoading(true);
      setButtonDisabled(true);
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add more headers if needed
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // Disable the button during the data-saving process
        setLoading(false);
        setButtonDisabled(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setLoading(false);
      setButtonDisabled(false);
      setEmail("");
      const data = await response.json();
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      setButtonDisabled(false);
      toast.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <ToastContainer />
      </div>
      <footer className="bg-dark dark:bg-gray-900 mt-auto">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-100 xl:text-2xl dark:text-white">
                {t("Subscribe our newsletter to get update.")}
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button
                  id="buttonsubscribe"
                  onClick={handleSubscribe}
                  disabled={buttonDisabled}
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  {loading ? (
                    <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                  ) : (
                    `${t("Subscribe")}`
                  )}
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-200 dark:text-white">
                {t("Quick Link")}
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/"
                  className="text-gray-300 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {t("Home")}
                </a>
                <a
                  href="/"
                  className="text-gray-300 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {t("Visiting Request")}
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-200 dark:text-white">
                {t("Other Services")}
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/"
                  className="text-gray-300 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {t("LIC")}
                </a>
                <a
                  href="/"
                  className="text-gray-300 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {t("Composted Chicken manure")}
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-10" src="./logo.png" alt="" />
            </a>

            <div className="flex -mx-2">
              <a
                href="#"
                className="mx-2 bg-white text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Instagram"
                style={{ borderRadius: "50%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#ff3887"
                >
                  <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" />
                </svg>
              </a>

              <a
                href="#"
                className="mx-2 bg-white text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
                style={{ borderRadius: "50%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#0077ff"
                >
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4 7.278V4.5h-2.286c-2.1 0-3.428 1.6-3.428 3.889v1.667H8v2.777h2.286V19.5h2.857v-6.667h2.286L16 10.056h-2.857V8.944c0-1.11.572-1.666 1.714-1.666H16z" />
                </svg>
              </a>

              <a
                href="#"
                className="mx-2 bg-white  text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Youtube"
                style={{ borderRadius: "50%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#ff383f"
                >
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm.294 7h-.589l-1.101.013c-1.48.024-3.709.092-4.465.285a1.836 1.836 0 0 0-1.326 1.263c-.181.644-.258 1.69-.29 2.46l-.022.815v.328l.008.426c.022.764.09 2.088.304 2.849.172.614.68 1.098 1.326 1.263.736.188 2.867.257 4.346.283L11.89 17l1.159-.008c1.453-.019 3.993-.082 4.811-.29a1.836 1.836 0 0 0 1.327-1.263c.21-.75.28-2.048.302-2.817l.01-.528-.003-.403c-.012-.67-.066-2.265-.31-3.13a1.836 1.836 0 0 0-1.326-1.263c-.661-.169-2.45-.242-3.878-.274L12.294 7zm-1.828 2.89l3.92 2.11-3.92 2.11V9.89z" />
                </svg>
              </a>

              <a
                href="#"
                className="mx-2 bg-white  text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Whatsapp"
                style={{ borderRadius: "50%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#83ff00"
                >
                  <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm.14 4.5a7.34 7.34 0 0 0-6.46 10.82l.15.26L4.5 19.5l4.08-1.3a7.38 7.38 0 0 0 10.92-6.4c0-4.03-3.3-7.3-7.36-7.3zm0 1.16c3.41 0 6.19 2.76 6.19 6.15a6.17 6.17 0 0 1-9.37 5.27l-.23-.15-2.38.76.77-2.28a6.08 6.08 0 0 1-1.17-3.6 6.17 6.17 0 0 1 6.19-6.15zM9.66 8.47a.67.67 0 0 0-.48.23l-.14.15c-.2.23-.5.65-.5 1.34 0 .72.43 1.41.64 1.71l.14.2a7.26 7.26 0 0 0 3.04 2.65l.4.14c1.44.54 1.47.33 1.77.3.33-.03 1.07-.43 1.22-.85.15-.42.15-.78.1-.85-.02-.05-.08-.08-.15-.12l-1.12-.54a5.15 5.15 0 0 0-.3-.13c-.17-.06-.3-.1-.41.09-.12.18-.47.58-.57.7-.1.1-.18.13-.32.08l-.4-.18a4.64 4.64 0 0 1-2.13-1.98c-.1-.18-.01-.28.08-.37l.27-.31c.1-.1.12-.18.18-.3a.3.3 0 0 0 .01-.26l-.1-.23-.48-1.15c-.15-.36-.3-.3-.4-.3l-.35-.02z" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-center">
            <a
              className="text-gray-500"
              href="https://www.vrnitsolution.tech/"
              rel="follow"
            >
              Designed by VRNITSOLUTION &copy;2023 Varad Nikharage
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
