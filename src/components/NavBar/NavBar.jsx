import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="p-5 text-white bg-black">
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
        {open === true ? <RxCross1 /> : <RiMenu2Fill />}
      </div>
      <ul
        className={`md:flex duration-1000 ${
          open ? "top-16" : "-top-60"
        } absolute md:static p-5  bg-black rounded-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
