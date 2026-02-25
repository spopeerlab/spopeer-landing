import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const bentoItems = [
  {
    title: "Global Network",
    description: "Connect with sports professionals from over 1500 sports categories from 200+ countries.",
    color: "bg-blue-100",
    arrowColor: "bg-blue-600",
    image: "/bento/global-network.png",
    gridClass: "sm:col-start-1 sm:row-start-1 sm:col-span-1 sm:row-span-1",
  },
  {
    title: "Sports Marketplace",
    description: "All in one platform for all your sports needs. Buy/sell gear, training, and services.",
    color: "bg-pink-100",
    arrowColor: "bg-pink-600",
    image: "/bento/marketplace.png",
    gridClass: "sm:col-start-1 sm:row-start-2 sm:col-span-1 sm:row-span-1",
  },
  {
    title: "AI Matchmaking",
    description: "With our AI matchmaking system, you can find your perfect coach, athlete, or sponsor.",
    color: "bg-purple-100",
    arrowColor: "bg-purple-600",
    image: "/bento/matchmaking.png",
    gridClass: "sm:col-start-2 sm:row-start-1 sm:col-span-1 sm:row-span-1",
  },
  {
    title: "Secure & Transparent",
    description: "Following the latest security standards and regulations, so that your data is protected",
    color: "bg-green-100",
    arrowColor: "bg-green-600",
    image: "/bento/encrypted.png",
    gridClass: "sm:col-start-2 sm:row-start-2 sm:col-span-1 sm:row-span-1",
  },
  {
    title: "Specialized Tools",
    description: "Specialized tools for sports professionals to help them grow their business and connect with more people.",
    color: "bg-orange-100",
    arrowColor: "bg-orange-600",
    image: "/bento/engagement.png",
    gridClass: "sm:col-start-3 sm:row-start-1 sm:col-span-1 sm:row-span-2",
    featuredImage: true,
  },
];

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 filter blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 filter blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive suite of features empowers sports professionals to
            connect, grow, and succeed in the global sports ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr"
          style={{
            gridAutoRows: "minmax(200px, 1fr)",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {bentoItems.map((item) => (
            <motion.article
              key={item.title}
              className={`
                ${item.color} ${item.gridClass} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow
                flex flex-col min-h-[200px] overflow-hidden
              `}
              variants={itemVariants}
            >
              <div className="flex justify-between items-start gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full ${item.arrowColor} flex items-center justify-center`}
                  aria-hidden
                >
                  <ChevronRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <p
                className={`text-gray-700 text-sm leading-relaxed ${
                  item.title === "Specialized Tools" ? "mb-12" : "mb-1 flex-1"
                }`}
              >
                {item.description}
              </p>
              {item.title === "Specialized Tools" && (
                <ul className="space-y-1.5 mb-2">
                  {[
                    "Advanced Performance Analytics",
                    "Athlete & Fan Insights",
                    "Smart Sponsorship Matching",
                    "Automated Marketing & Outreach",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-900">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div
                className={`mt-auto flex min-h-[100px] ${
                  item.featuredImage
                    ? "flex-1 items-center justify-center w-full"
                    : "items-center justify-center w-full"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className={
                    item.featuredImage
                      ? "object-contain object-center w-full h-full max-h-80 sm:max-h-96 min-h-[180px]"
                      : "object-contain object-center max-h-40 w-auto"
                  }
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
