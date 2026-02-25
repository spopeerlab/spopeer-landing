import { ChevronRight } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <footer className="rounded-t-3xl bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold">Never Miss a Moment</h3>
            <p className="text-sm text-gray-400 mt-0.5">Your Sports Hub</p>
          </div>
          <button
            onClick={openWaitlist}
            className="flex items-center gap-2 bg-spopeer-blue hover:opacity-90 transition-opacity rounded-xl px-5 py-3 font-medium text-white shrink-0"
          >
            Join Waitlist
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <Link to="/privacypolicy" className="text-sm text-gray-400 hover:text-spopeer-blue transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termsofuse" className="text-sm text-gray-400 hover:text-spopeer-blue transition-colors">
                Terms of Use
              </Link>
            </li>
            <li>
              <a href="/#contact" className="text-sm text-gray-400 hover:text-spopeer-blue transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Spopeer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
