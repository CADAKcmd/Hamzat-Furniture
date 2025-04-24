import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Office Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Office</h3>
          <p>Germany —</p>
          <p>785 15th Street, Office 478</p>
          <p>Berlin, DE 81566</p>
          <p className="mt-2 underline">info@email.com</p>
          <p className="mt-2 font-bold text-xl">+1 840 841 25 69</p>
        </div>

        {/* Links Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Socials</h3>
          <ul className="space-y-2 ">
            <li>
              {" "}
              <a href="#" className="text-blue-600 text-2xl mr-2">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              Facebook
            </li>
            <li>
              <a href="#" className="text-blue-400 text-2x mr-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              Twitter
            </li>
            <li>
              <a href="#" className="text-pink-500 text-2xl mr-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              Instagram
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Newsletter</h3>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-3 bg-gray-800 text-white focus:outline-none"
            />
            <button className="p-3 bg-pink-500">&rarr;</button>
          </div>
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <label>
              I agree to the{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 flex w-full justify-end items-center text-gray-400 text-sm">
        <p className="mt-4 md:mt-0">
          Hamzy Furnituring © 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
