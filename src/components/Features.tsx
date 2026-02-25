import { motion } from "framer-motion";
import Roles from "@/components/Roles";

const Features = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            The Spopeer Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Revolutionizing how the world <br className="hidden sm:block" /> engages with sports
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're building a global ecosystem where athletes, coaches, clubs, and fans connect and thrive together through innovative technology.
          </p>
        </motion.div>

        <Roles />
      </div>
    </section>
  );
};

export default Features;