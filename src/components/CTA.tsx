import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";

const CTA = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="waitlist" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Join Our Community
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Ready to Transform Your Sports Journey?
            </h2>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Join thousands of sports professionals already building their future on Spopeer. 
              Connect with athletes, coaches, and fans from over 200 countries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={openWaitlist} 
                className="text-base px-8 py-6 bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-all rounded-xl"
              >
                Join the Waiting List
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="text-base px-8 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all rounded-xl"
                onClick={() => window.location.href = '/#features'}
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Photo Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 grid-rows-2 gap-4 h-full"
          >
            {/* Portrait Photo - Spans 2 rows */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
              <img 
                src="/lovable-uploads/basketball-jump.jpg" 
                alt="Athlete in action"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <div className="rounded-2xl bg-slate-900 p-6 flex flex-col justify-center items-center text-center shadow-lg">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">15K+</p>
              <p className="text-sm text-gray-300 leading-snug">Sports<br />Professionals</p>
            </div>
            
            {/* Wide Landscape Photo */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
              <img 
                src="/lovable-uploads/training-football.jpg" 
                alt="Sports training"
                className="w-full h-full object-cover min-h-[140px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
