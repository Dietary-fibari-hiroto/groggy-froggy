import ImagesRoutes from "../../assets/ImagesRoutes";
import LinkButton from "../LinkButton";

const contents = [
  { title: "春、濁り", img: ImagesRoutes.IMG_movie2, link: "" },
  { title: "近い未来の話", img: ImagesRoutes.sddefault, link: "" },
];

const MusicVideoList = () => {
  return (
    <div className="UDDigiKyokashoProR w-full flex flex-col items-center">
      {contents.map(({ title, img, link }, index) => (
        <div
          key={index}
          className={`w-full flex  px-[300px] ${
            index % 2 == 0 ? "justify-start" : "justify-end"
          }`}
        >
          <MusicCard title={title} img={img} link={link} />
        </div>
      ))}
    </div>
  );
};

const MusicCard = (items) => {
  return (
    <div className={`relative w-[500px] h-[400px] text-white `}>
      <p className="absolute top-0 left-0 string-md">春、濁り{items.title}</p>
      <img
        className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 w-[500px] h-[300px] rounded-[50px]"
        src={items.img}
        alt=""
      />{" "}
      <div className="absolute bottom-0 right-0 flex items-end">
        <p className="string-s">View</p>
        <div className="w-[200px] h-[1px] bg-white"></div>
      </div>
    </div>
  );
};

export default MusicVideoList;
