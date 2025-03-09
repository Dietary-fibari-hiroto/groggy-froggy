import ImagesRoutes from "../../assets/ImagesRoutes";

const FooterPhotos = () => {
  const imgValues = [
    ImagesRoutes.IMG_2983,
    ImagesRoutes.IMG_4492,
    ImagesRoutes.IMG_2959,
    ImagesRoutes.IMG_a,
  ];
  return (
    <div className="carousel bg-black relative">
      <div className="inner">
        {imgValues.map((item, index) => (
          <img
            className="w-[1000px] h-[700px] opacity-[0.7]"
            key={index}
            src={item}
            alt="test"
          />
        ))}
        {imgValues.map((item, index) => (
          <img
            className="w-[1000px] h-[700px] opacity-[0.7]"
            key={index}
            src={item}
            alt="test"
          />
        ))}
      </div>
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 flex items-center pb-[50px] space-x-[20px]">
        <p className="text-white string-s">Unwavering, heartfelt music.</p>
        <div className="w-[1px] h-[100px] bg-white"></div>
        <div className="flex items-center">
          <img className="size-[75px]" src={ImagesRoutes.logo_w} alt="" />
          <img className="h-[75px]" src={ImagesRoutes.longlog_w} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterPhotos;
