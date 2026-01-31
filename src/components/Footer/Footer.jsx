import React from 'react';
import {
  Users,
  Briefcase,
  Link as LinkIcon,
  Instagram,
  MapPinnedIcon,
  PhoneIcon,
  MailIcon
} from 'lucide-react';
import { navLinks } from '../../data/constants';
import { Link } from 'react-router-dom';


const Footer = ({ onConsultationClick }) => (
  <footer id="contact" className="bg-gray-900 text-white mt-12">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-2xl font-extrabold text-emerald-400 tracking-wide">Lawyers Desk</h4>
          <div className="text-gray-400 space-y-1">
            <span className="text-base font-semibold text-emerald-300">Chamber Address</span>
            <p className="text-sm leading-relaxed">D-202 & G-507, Lawyers Chamber Block, Karkardooma</p>
            <p className="text-sm leading-relaxed">Court Complex, DL - 110032</p>
          </div>

          <div className="pt-2 space-y-2 text-lg font-semibold text-gray-300">
            <p>
              <PhoneIcon className="inline-block w-5 h-5 mr-2 text-emerald-400 align-middle" />
              <a href="tel:+917838866030" className="hover:text-emerald-300">
                +91-7838866030
              </a>
            </p>
            <p>
              <PhoneIcon className="inline-block w-5 h-5 mr-2 text-emerald-400 align-middle" />
              <a href="tel:+919205384026" className="hover:text-emerald-300">
                +91-9205384026
              </a>
            </p>
            <p>
              <MailIcon className="inline-block w-5 h-5 mr-2 text-emerald-400 align-middle" />
              <a href="mailto:info@lawyersdesk.in" className="hover:text-emerald-300">
                info@lawyersdesk.in
              </a>
            </p>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-400 hover:text-emerald-300 transition duration-150">{link.name}</a>
              </li>
            ))}
            <li>
              <button onClick={onConsultationClick} className="text-gray-400 hover:text-emerald-300 transition duration-150">
                Free Consultation
              </button>
            </li>
          </ul>
        </div>

        {/* Map & Social (Placeholder) */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold text-white mb-3">Connect with Us</h4>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-emerald-400">Office Address:</span><br />
            Q16B, LGF, Jangpura Extension, Delhi - 110014
          </p>
          <p className="text-gray-400 mb-4">
            Follow us for legal insights and firm updates.
          </p>
          <div className="flex space-x-4 text-emerald-400">
            <a
              href="https://maps.app.goo.gl/HScTwhQ3Hi4SWkCj7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinnedIcon className="w-6 h-6 hover:text-emerald-300 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/adv.sidharth?igsh=cTY2MmZjZXluaGQ5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-emerald-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500">
          <Link
            to="/terms"
            className="hover:text-emerald-300 underline mr-2"
          >
            Privacy Policy
          </Link>
          | &copy; {new Date().getFullYear()} Lawyers Desk. All rights reserved. |
          Disclaimer: Developed by{" "}
          <a
            href="https://www.linkedin.com/in/shashankporwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Shashank
          </a>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;