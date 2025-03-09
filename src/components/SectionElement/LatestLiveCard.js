import ImagesRoutes from "../../assets/ImagesRoutes";
import LinkButton from "../LinkButton";

const LatestLiveCard = () => {
  return (
    <div className=" UDDigiKyokashoProR">
      <div
        className=" relative z-[10] section-bg-setting h-[600px] w-[1000px]"
        style={{ backgroundImage: `url(${ImagesRoutes.gfLive1})` }}
      >
        <div className="absolute bottom-5 left-5 string-ss tracking-[5px] space-y-[10px]">
          <p className="bg-white px-[10px]">2025.3.21(金)</p>
          <p className="bg-white px-[10px]">新栄RAD SEVEN</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-white">
        <p className="string-lg">夜が明ける前に</p>
        <LinkButton />
      </div>
    </div>
  );
};

export default LatestLiveCard;
