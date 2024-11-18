import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
    return (
        <div className="fixed left-0 bottom-0 mb-6 pl-8 z-50">
            <div className="flex flex-col items-center space-y-4">
                {/* Social Icons */}
                <ul className="flex flex-col items-center space-y-4">
                    {/* Instagram */}
                    <li>
                        <a
                            href="https://www.instagram.com/felix__reder/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500 transition-transform transform hover:scale-110"
                        >
                            <FaInstagram size={28} />
                        </a>
                    </li>
                    {/* GitHub */}
                    <li>
                        <a
                            href="https://github.com/Zyrok3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-800 transition-transform transform hover:scale-110"
                        >
                            <FaGithub size={28} />
                        </a>
                    </li>
                    {/* LinkedIn */}
                    <li>
                        <a
                            href="https://www.linkedin.com/in/felix-reder/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    </li>
                    {/* LeetCode */}
                    <li>
                        <a
                            href="https://leetcode.com/u/Felix-_-3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-500 transition-transform transform hover:scale-110"
                        >
                            <SiLeetcode size={28} />s
                        </a>
                    </li>
                </ul>

                {/* Vertical Line */}
                <div className="h-32 w-0.5 bg-gray-600"></div>
            </div>
        </div>
    );
};

export default SocialLinks;
