import { Link } from "react-router-dom";
import ImagesRoutes from "../assets/ImagesRoutes";

const PagePathList = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Story", path: "/profile" },
  { name: "Live", path: "/live" },
  { name: "News", path: "/news" },
  { name: "Contact" },
];

const Header = () => {
  return (
    <div className="tk-takumi-shokei-font text-[#3E7677] absolute w-full top-0 z-10 flex justify-between items-center p-[10px]">
      <Link to="/" className="size-[75px] bg-[#3E7677] rounded-[50%]">
        <img className="size-full" src={ImagesRoutes.logo_w} alt="" />
      </Link>
      <nav>
        <ul className="flex items-center justify-between space-x-[50px] text-[25px]">
          {PagePathList.map(({ name, path }) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
