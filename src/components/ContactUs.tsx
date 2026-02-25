import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Twitter, Send, MapPin, Mail } from "lucide-react";
import { getApiUrl } from "@/utils/api";

// Custom social media icons
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="text-white">
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z"></path>
  </svg>
);

const ViberIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
  <path fill="#af87ce" d="M31.596,33.436l-2.103-0.845c-14.748-5.924-16.972-18.854-17.06-19.402l-0.322-2.018l7.042-0.972	l2.285,6.366l-3.172,1.139c1.388,2.65,3.745,5.871,7.688,8.527l1.465-2.918l6.045,3.034L31.596,33.436z"></path><path fill="#af87ce" d="M15.781,48H12v-8.437c-4.99-1.456-8.589-5.822-8.976-11.134C2.66,23.432,2.645,19.617,2.97,14.823	C3.393,8.608,8.371,3.608,14.551,3.192c7.166-0.483,13.165-0.487,20.061-0.02c6.086,0.413,11.045,5.29,11.535,11.345l0,0	c0.4,4.953,0.384,9.07-0.057,14.212c-0.518,6.037-5.32,10.809-11.42,11.345c-4.06,0.357-7.058,0.472-10.755,0.433L15.781,48z M24.812,6.826c-3.213,0-6.457,0.119-9.993,0.356c-4.193,0.282-7.571,3.684-7.858,7.912c-0.312,4.591-0.297,8.248,0.052,13.044	c0.293,4.021,3.288,7.245,7.282,7.842L16,36.235v6.124l6.383-5.88l0.802,0.015c3.917,0.073,6.938-0.036,11.134-0.404	c4.16-0.366,7.434-3.604,7.785-7.702c0.426-4.97,0.441-8.769,0.055-13.548l0,0c-0.331-4.096-3.692-7.396-7.819-7.677	C31.033,6.938,27.938,6.826,24.812,6.826z"></path><path fill="#742bc9" d="M22.266,36.45l-3.336,3.892c1.717,0.089,3.427,0.143,5.13,0.162l3.456-4.032	C25.775,36.503,24.026,36.497,22.266,36.45z"></path><path fill="#742bc9" d="M16,40.154v-4.023c-0.393-0.031-0.784-0.044-1.177-0.078c-1.004-0.088-1.952-0.348-2.823-0.743v4.255	c0.794,0.232,1.619,0.398,2.474,0.473C14.983,40.082,15.491,40.116,16,40.154z"></path><path fill="#af87ce" d="M30.459,21.142c-0.468-1.241-1.176-2.34-2.103-3.267c-1.016-1.017-2.231-1.765-3.613-2.224	l0.631-1.898c1.68,0.559,3.159,1.47,4.396,2.708c1.128,1.128,1.99,2.465,2.559,3.974L30.459,21.142z"></path><path fill="#af87ce" d="M34.78,22.022c-0.618-2.559-1.933-4.898-3.803-6.769c-1.854-1.854-4.174-3.165-6.71-3.789	l0.478-1.941c2.89,0.711,5.534,2.204,7.646,4.316c2.13,2.13,3.629,4.797,4.333,7.714L34.78,22.022z"></path>
  </svg>
);

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
  <g fill="#44d3db" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M44.37695,5.98633c-0.48705,0.02137 -0.96114,0.15692 -1.38867,0.32813c-0.42317,0.17006 -2.8594,1.20989 -6.45703,2.74805c-3.59763,1.53816 -8.27429,3.54117 -12.91016,5.52734c-9.27174,3.97235 -18.38281,7.88086 -18.38281,7.88086l0.06641,-0.02539c0,0 -0.5499,0.18381 -1.10742,0.57227c-0.27876,0.19423 -0.57866,0.44498 -0.82422,0.81055c-0.24556,0.36557 -0.42507,0.88366 -0.35742,1.43164c0.23762,1.92475 2.23242,2.4707 2.23242,2.4707l0.00781,0.00391l8.90234,3.04688c0.22697,0.75718 2.70012,9.01167 3.24414,10.75977c0.30045,0.96647 0.58167,1.52398 0.875,1.9043c0.14679,0.19032 0.30062,0.3376 0.4707,0.44531c0.06758,0.04279 0.13865,0.0749 0.20898,0.10352c0.0015,0.00066 0.00241,-0.00066 0.00391,0c0.00864,0.00381 0.01677,0.00415 0.02539,0.00781l-0.02344,-0.00586c0.01634,0.0066 0.03247,0.01771 0.04883,0.02344c0.03174,0.01112 0.05119,0.01074 0.0918,0.01953c1.01954,0.35598 1.86328,-0.30469 1.86328,-0.30469l0.03516,-0.02734l5.46875,-5.07227l8.875,6.91992l0.11133,0.05078c1.55345,0.68975 2.95832,0.30493 3.73633,-0.32812c0.77801,-0.63306 1.08398,-1.44922 1.08398,-1.44922l0.0332,-0.08594l6.52148,-33.99023c0.16687,-0.76044 0.19058,-1.41775 0.0332,-2.01172c-0.15738,-0.59397 -0.53974,-1.1103 -1.01953,-1.39648c-0.47979,-0.28619 -0.9817,-0.37879 -1.46875,-0.35742zM44.42969,8.01953c0.1978,-0.00916 0.34441,0.01345 0.39062,0.04102c0.04621,0.02756 0.06696,0.02394 0.11133,0.19141c0.04437,0.16747 0.0684,0.52021 -0.05273,1.07227l-0.00391,0.01172l-6.48437,33.79297c-0.01535,0.03402 -0.15047,0.34662 -0.45898,0.59766c-0.31473,0.25609 -0.66477,0.45599 -1.59375,0.06641l-9.70508,-7.56836l-0.27344,-0.21484l-0.00586,0.00586l-2.90234,-2.17773l16.31055,-19.18945c0.25603,-0.30045 0.31139,-0.72339 0.1413,-1.0796c-0.17009,-0.35622 -0.5338,-0.57906 -0.92841,-0.56883c-0.18875,0.0049 -0.37226,0.06314 -0.5293,0.16797l-23.60156,15.73438l-8.91602,-3.05273c0,0 -0.88536,-0.49268 -0.92773,-0.83594c-0.00235,-0.01902 -0.0128,-0.0018 0.0332,-0.07031c0.04601,-0.06849 0.16165,-0.18413 0.30664,-0.28516c0.28998,-0.20204 0.62109,-0.32422 0.62109,-0.32422l0.0332,-0.01172l0.0332,-0.01367c0,0 9.11155,-3.90871 18.38281,-7.88086c4.63563,-1.98607 9.31146,-3.98761 12.9082,-5.52539c3.59582,-1.53738 6.19406,-2.64398 6.41406,-2.73242c0.25046,-0.1003 0.49946,-0.14123 0.69727,-0.15039zM33.61328,18.79297l-12.36914,14.55273l-0.00586,0.00586c-0.01931,0.02325 -0.03756,0.04736 -0.05469,0.07227c-0.01962,0.02706 -0.03787,0.05509 -0.05469,0.08398c-0.06949,0.11795 -0.11403,0.24891 -0.13086,0.38477c-0.00001,0.0026 -0.00001,0.00521 0,0.00781l-1.61133,7.24609c-0.02679,-0.07829 -0.04555,-0.10693 -0.07422,-0.19922v-0.00195c-0.51179,-1.64446 -2.84514,-9.42921 -3.16797,-10.50586zM22.64063,35.73047l2.22266,1.66797l-3.26562,3.02734z"></path></g></g>
  </svg>
);

const ContactUs = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
  
    try {
      const response = await fetch(`${getApiUrl()}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setLoading(false);
      toast({
        title: "Success!",
        description: "Thanks for sending the message!",
      });
          
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 filter blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 filter blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Have questions about Spopeer? We're here to help! Reach out to us through any of the channels below.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <a href="mailto:erditgr@yahoo.gr" className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 group hover:bg-blue-100/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Email Us</h3>
                </div>
              </a>
              
              <a href="https://wa.me/306936471452" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 group hover:bg-green-100/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">WhatsApp</h3>
                </div>
              </a>

              <a href="https://t.me/+306936471452" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-cyan-50 border border-cyan-100 group hover:bg-cyan-100/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-200">
                  <TelegramIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors">Telegram</h3>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                  <p className="text-sm text-gray-600">Athens, Greece</p>
                </div> 
              </div>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/spopeer/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </a>
                <a href="https://x.com/Spopeer" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
