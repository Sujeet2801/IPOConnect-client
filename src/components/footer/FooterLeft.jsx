import { FiGithub, FiLinkedin, FiFacebook, FiInstagram, } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3 text-2xl text-gray-700">
        <FiGithub
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => window.open("https://github.com/Sujeet2801/IPO-Connect", "_blank")}
        />
        <FiLinkedin
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/sujeet-kumar-gupta-23b7b6237/", "_blank")}
        />
        <FaXTwitter
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => window.open("https://x.com/Sujeetg2801", "_blank")}
        />
        <MdOutlineMailOutline
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => window.open("mailto:sujeetgupta2801@gmail.com", "_blank")}
        />
        <BiBriefcase
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => window.open("https://portfolio.sujeettech.com/", "_blank")}
        />
        {/* <SiHashnode
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => window.open("https://instagram.com/", "_blank")}
        /> */}
      </div>
      <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 
      to-blue-50 text-transparent bg-clip-text cursor-pointer hover:scale-105 
      transition-transform duration-300">IPOConnect
      </p>
    </div>
  );
}

export default SocialLinks;
