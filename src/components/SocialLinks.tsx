import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className="fixed left-0 bottom-0 mb-6 pl-8 z-50">
      <div className="flex flex-col items-center space-y-4">
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a
              href="mailto:felix.reder@gmail.com"
              className="text-gray-500 hover:text-red-500 transition-transform transform hover:scale-110"
            >
              <MdEmail size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zyrok3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:hover:text-white hover:text-gray-800 transition-transform transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/felix-reder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/Felix-_-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-yellow-500 transition-transform transform hover:scale-110"
            >
              <SiLeetcode size={32} />
            </a>
          </li>
        </ul>

        <div className="h-44 w-1 bg-gray-600"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
