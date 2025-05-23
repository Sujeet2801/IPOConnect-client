import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Social Icons */}
      <div className="flex gap-4 text-2xl text-gray-600">
        <FiGithub
          aria-label="GitHub"
          className="hover:text-blue-500 cursor-pointer transition duration-200"
          onClick={() => window.open("https://github.com/Sujeet2801/IPO-Connect", "_blank")}
        />
        <FiLinkedin
          aria-label="LinkedIn"
          className="hover:text-blue-500 cursor-pointer transition duration-200"
          onClick={() => window.open("https://www.linkedin.com/in/sujeet-kumar-gupta-23b7b6237/", "_blank")}
        />
        <FaXTwitter
          aria-label="Twitter (X)"
          className="hover:text-blue-500 cursor-pointer transition duration-200"
          onClick={() => window.open("https://x.com/Sujeetg2801", "_blank")}
        />
        <MdOutlineMailOutline
          aria-label="Email"
          className="hover:text-blue-500 cursor-pointer transition duration-200"
          onClick={() => window.open("mailto:sujeetgupta2801@gmail.com", "_blank")}
        />
        <BiBriefcase
          aria-label="Portfolio"
          className="hover:text-blue-500 cursor-pointer transition duration-200"
          onClick={() => window.open("https://portfolio.sujeettech.com/", "_blank")}
        />
      </div>

      {/* Brand Name */}
      <p
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 
        to-yellow-400 text-transparent bg-clip-text cursor-pointer hover:scale-105 
        transition-transform duration-300"
      >
        IPOConnect
      </p>
    </div>
  );
}

export default SocialLinks;
