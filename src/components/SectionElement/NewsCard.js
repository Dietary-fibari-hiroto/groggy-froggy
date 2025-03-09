import LinkButton from "../LinkButton";

const contents = [
  {
    title: "最新シングル「Dawn Horizon」リリース決定！",
    day: "20xx.01.18",
    category: "music",
  },
  {
    title: "全国ツアー「Rising Echoes 2025」開催決定！",
    day: "20xx.01.18",
    category: "live",
  },
  {
    title: "メンバーからのメッセージ動画公開！",
    day: "20xx.01.18",
    category: "blog",
  },
];

const NewsCard = () => {
  return (
    <div className="w-[650px] h-[400px] border-[3px] border-primary rounded-[50px] flex flex-col items-center justify-around">
      <div className="fle flex-col items-center">
        {contents.map(({ title, day, category }, index) => (
          <NewsElement
            key={index}
            title={title}
            day={day}
            category={category}
          />
        ))}
      </div>
      <div className="bg-primary text-white flex rounded-[50px]">
        <LinkButton />
      </div>
    </div>
  );
};

const NewsElement = (items) => {
  return (
    <div className="border-b border-b-primary space-y-[10px] pb-[10px]">
      <p className="text-start string-ss">{items.title}</p>
      <div className="flex items-center space-x-[10px] string-sss">
        <p>{items.day}</p>
        <p>{items.category}</p>
        <div className="w-[200px] h-[1px] bg-black"></div>
      </div>
    </div>
  );
};

export default NewsCard;
