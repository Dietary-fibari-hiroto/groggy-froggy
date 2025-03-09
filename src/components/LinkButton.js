import { Link } from "react-router-dom";
import ImagesRoutes from "../assets/ImagesRoutes";

const LinkButton = ({ to }) => {
  return (
    <Link
      to={to}
      className={`kinuta-shin-enpitsu-it-stdn string-md  border-b px-[30px] `}
    >
      <div className="flex items-center space-x-[20px]">
        <div>View...</div>
        <div className=" border rounded-[50%] size-[50px] flex justify-center items-center">
          <img className="w-2/3" src={ImagesRoutes.arrow} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default LinkButton;
