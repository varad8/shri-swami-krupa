import React from "react";

function FeatureSection() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our features
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
                  Organic Feed Nutrition
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Our poultry farm prioritizes the health and well-being of our
                  chickens by offering specially curated organic feeds. These
                  feeds are free from synthetic additives and pesticides,
                  ensuring that your chickens receive a nutritionally balanced
                  and natural diet. This contributes to the overall quality of
                  the chicken and eggs produced.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2382/2382461.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Non-GMO Grains for Optimal Health
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  We understand the importance of avoiding genetically modified
                  organisms (GMOs) in poultry nutrition. That's why our farm
                  sources high-quality, non-GMO grains to create feeds for our
                  chickens. By opting for non-GMO grains, we prioritize the
                  natural growth and development of our chickens, resulting in
                  healthier and more robust birds.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10554/10554434.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Pasture-Raised Freedom
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Our commitment to organic and natural practices extends to the
                  living conditions of our chickens. We provide ample space for
                  our chickens to roam freely in a pasture-based environment.
                  This allows them to engage in natural behaviors, such as
                  foraging and dust bathing, promoting their mental and physical
                  well-being.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/12630/12630838.png"
                    className="w-6 h-6"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Supplemental Herbs for Immune Support
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Enhancing the immune system of our chickens is a top priority.
                  In addition to a wholesome organic diet, we incorporate
                  carefully selected herbs known for their immune-boosting
                  properties into their feed. This proactive approach helps to
                  maintain the health of the flock naturally, reducing the need
                  for artificial interventions.
                </p>
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
