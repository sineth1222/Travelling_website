import Link from "next/link"
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"


const social = [
    { Icon: <FaInstagram/>, path: "https://github.com/sineth1222" },
    { Icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/sineth-mashenka-113122241/" },
    { Icon: <FaFacebook/>, path: "https://web.facebook.com/profile.php?id=100086166321782" },
    { Icon: <FaWhatsapp/>, path: "https://www.linkedin.com/in/sineth-mashenka-113122241/" },
];

interface Pagesocials {
    containerStyles: string;
    iconStyles: string;
}

const Socials: React.FC<Pagesocials> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.Icon}
            </Link>
        );
      })}
    </div>
  )
}

export default Socials
