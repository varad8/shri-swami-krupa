import React from "react";
import { useTranslation } from "react-i18next";

function FeatureSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            {t("explore our features")}
            <br />
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8445/8445959.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("Organic Feed Nutrition")}
                </h1>

                <p className="text-gray-500 dark:text-gray-300">{t("f1")}</p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2382/2382461.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("Non-GMO Grains For Optimal Health")}
                </h1>

                <p className="text-gray-500 dark:text-gray-300">{t("f2")}</p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10554/10554434.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("Pasture-Raised Freedom")}
                </h1>

                <p className="text-gray-500 dark:text-gray-300">{t("f3")}</p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/12630/12630838.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("Supplemental Herbs for Immune Support")}
                </h1>

                <p className="text-gray-500 dark:text-gray-300">{t("f4")}</p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full shadow-md"
                src="./posterfeature.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
