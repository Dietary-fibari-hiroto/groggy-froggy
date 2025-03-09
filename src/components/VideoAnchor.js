import ImagesRoutes from "../assets/ImagesRoutes";

const VideoAnchor = (items) => {
  return (
    <div className="relative min-w-[700px] min-h-[600px] ml-[50px]">
      <p className="absolute z-[3] top-0 left-0 flex-center bg-[#4D8D8F] w-[300px] h-[100px] string-ss drop-shadow-bl">
        {items.day}
      </p>
      <img
        className="absolute z-[2] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 w-[600px] h-[450px] drop-shadow-bl object-cover"
        src={items.img}
        alt=""
      />
      <div className="absolute z-[1] bottom-0 right-0 flex items-end justify-evenly bg-[#4D8D8F] w-[400px] h-[140px] drop-shadow-bl">
        <div className="flex-center-col h-[80px]">
          <p className="string-ss text-start">{items.title}</p>
          <p className="string-mm text-start">{items.genre}</p>
        </div>
        <img className="size-[80px]" src={ImagesRoutes.froggy_head_w} alt="" />
      </div>
    </div>
  );
};

export default VideoAnchor;
