import ImagesRoutes from "../assets/ImagesRoutes";

const Footer = () => {
  return (
    <div className=" w-full  uddigikyokasho-pro text-white  ">
      <div className=" flex-center">
        <img
          className="size-[200px] my-[100px]"
          src={ImagesRoutes.froggy_w}
          alt=""
        />
      </div>
      <p className="tracking-[3px] h-[50px] flex-center-col">
        Copyright 2024 - Dawn All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
