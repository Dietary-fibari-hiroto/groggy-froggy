import ImagesRoutes from "../assets/ImagesRoutes";

const LoadingScreen = () => {
  return (
    <div className="UDDigiKyokashoProR section-frame sticky z-[10]  bg-[#6DC2C6] flex flex-col justify-center items-center overflow-hidden">
      <div className="relative w-[550px] h-[200px] loading-content">
        <p className="child1 absolute top-0 left-0 px-[10px] text-[50px] bg-[#ffffff] text-[#3D7475] tracking-[5px]">
          揺るがない
        </p>
        <div className="child2 absolute right-0 bottom-0 bg-white flex items-center">
          <p className="text-[60px] text-[#FF8DE8]">愛</p>
          <p className="px-[10px] text-[50px] text-[#3D7475] tracking-[5px]">
            のある音楽を
          </p>
        </div>
      </div>
      <div className="loading-content2 h-[100lvh] w-[120vw]"></div>
      <div className="loading-content3 section-frame flex justify-center items-center">
        <img
          className="w-[500px] loading-content4 object-contain"
          src={ImagesRoutes.longlog_w}
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
