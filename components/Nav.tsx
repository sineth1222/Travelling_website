"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "destinations",
        path: "/services",
    },
    {
        name: "packages",
        path: "/resume",
    },
    {
        name: "About Us",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-8">{links.map((link, index) => {
        return(
            <Link href={link.path} key={index} className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}>
                {link.name}
            </Link>
        )
    })
    }
    </nav>
  )
}

export default Nav
