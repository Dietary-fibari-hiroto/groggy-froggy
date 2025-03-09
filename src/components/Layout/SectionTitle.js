const SectionTitle = (item) => {
  const color = !item.color ? "primary" : "white";
  return (
    <div
      className={`UDDigiKyokashoProR w-[80vw] text-start text-${color} space-y-[20px]`}
    >
      <p
        className={`inline string-l border-b-[3px] border-b-${color} tracking-[10px]`}
      >
        {item.title}
      </p>
      <div className="w-full flex items-center space-x-[10px]">
        {" "}
        <div className={` h-[1px] w-[50px] bg-${color}`}></div>
        <p className="string-ss">{item.subtitle}</p>
      </div>
    </div>
  );
};
export default SectionTitle;
