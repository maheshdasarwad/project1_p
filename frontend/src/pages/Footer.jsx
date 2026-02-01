import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#e0e0e0]  text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Brand */}
          <div>
            <h2 style={{ fontFamily: 'Conthrax', fontWeight: 600 }} className="text-3xl font-bold tracking-wide">
              CarsForum
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              CarsForum is a community-driven platform to explore, compare,
              and discuss cars with trusted reviews and insights.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontFamily: 'Conthrax', fontWeight: 600 }} className=" font-semibold mb-5 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-gray-700 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-gray-700 transition cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ fontFamily: 'Conthrax', fontWeight: 600 }} className="ml-40 font-semibold mb-5 uppercase tracking-wider text-sm">
              Connect
            </h3>
            <div className="ml-40 flex gap-5">
              <a
                href="https://github.com/maheshdasarwad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 hover:text-gray-700 transition cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/mahesh.dasarwad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-gray-700 transition cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/in/maheshdasarwad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 hover:text-gray-700 transition cursor-pointer" />
              </a>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CarsForum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
