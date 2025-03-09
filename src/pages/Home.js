import { Link } from "react-router-dom";
import ImagesRoutes from "../assets/ImagesRoutes";
import useInOrderAnimation from "../hooks/useInOrderAnimation";
import LinkButton from "../components/LinkButton";
import SectionTitle from "../components/Layout/SectionTitle";
import NewsCard from "../components/SectionElement/NewsCard";
import LatestLiveCard from "../components/SectionElement/LatestLiveCard";
import MusicVideoList from "../components/SectionElement/MusicVideoList";
import FooterPhotos from "../components/Layout/FotterPhotos";

const Home = () => {
  const currentAnimation = useInOrderAnimation();

  return (
    <div className="relative w-[100vw]">
      <section className="relative section-frame">
        <div className="absolute bottom-1/2 right-1/2 z-[1] translate-x-1/2 translate-y-1/2 w-full h-full px-[50px] py-[70px] h-[50px] section-bg-setting ">
          <img
            className="w-full h-full rounded-[50px] "
            src={ImagesRoutes.IMG_4492}
            alt=""
          />
        </div>
        <div className="UDDigiKyokashoProR absolute bottom-1/2 right-1/2 z-[3] translate-x-1/2 translate-y-1/2 w-full h-full flex justify-around items-center">
          <img
            className="w-[500px] bg-[#3E7576]"
            src={ImagesRoutes.longlog_w}
            alt=""
          />
          <div className="relative w-[550px] h-[200px]">
            <p className="absolute top-0 left-0 px-[10px] text-[50px] bg-[#ffffff] text-[#3D7475] tracking-[5px]">
              揺るがない
            </p>
            <div className="absolute right-0 bottom-0 bg-white flex items-center">
              <p className="text-[60px] text-[#FF8DE8]">愛</p>
              <p className="px-[10px] text-[50px] text-[#3D7475] tracking-[5px]">
                のある音楽を
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-[100vw] h-[130lvh]"
        style={{ backgroundImage: `url(${ImagesRoutes.IMG_2959})` }}
      >
        <div className="absolute h-full w-full bg-[#00000077] flex flex-col items-center justify-evenly text-white">
          <img className="w-[300px]" src={ImagesRoutes.longlog_w} alt="" />
          <p className="leading-[100px] string-sss UDDigiKyokashoProR ">
            大阪発3ピースウタモノバンド。
            <br />
            平均年齢21歳の3人組が愛のある音楽を届ける。
            <br />
            私たちの奏でる音楽が日常の枠を超えて広がり
            <br />
            聞いた人々に強い影響を与えることが目標です。
            <br />
            世界へ向けて、宇宙へ向けて、あなたへ向けて
            <br />
          </p>
          <LinkButton />
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-[50px]">
        <SectionTitle title="News" subtitle="最新情報" />
        <NewsCard />
      </section>
      <section className="relative w-full flex flex-col items-center py-[50px]">
        <div className="absolute z-[-3] top-0 left-0 bg-secondary w-[1300px] h-[550px]"></div>
        <div className="absolute z-[-3] bottom-0 right-0 bg-secondary w-[1500px] h-[350px]"></div>

        <SectionTitle
          color="1"
          title="Latest Live"
          subtitle="最新のライブ情報"
        />
        <LatestLiveCard />
      </section>

      {/*movie紹介部分 */}
      <section className="relative h-[600lvh] parent">
        <div
          className={`section-frame bg-gradient-to-r from-[#e3ebf7] to-[#bdcedd] in-order-content sticky top-0 z-0 ${
            currentAnimation <= 0 ? "" : "animateIn-1"
          }`}
        ></div>

        <figure
          className={`in-order-content sticky top-0 z-1  ${
            currentAnimation <= 1 ? "" : "animateIn-1"
          }`}
        >
          <img
            className="section-frame "
            src={ImagesRoutes.IMG_movie2}
            alt="IMG"
          />
        </figure>
        <figure
          className={`UDDigiKyokashoProR in-order-content sticky top-0 z-2 section-frame flex justify-center items-center ${
            currentAnimation <= 2 ? "" : "animateIn-1"
          }`}
        >
          <div className="flex-1 flex flex-col items-center space-y-[30px]">
            <div className="flex flex-col items-start justify-center space-y-[30px]">
              <p className="string-ss">2024/06/12</p>
              <p className="text-[100px] kinuta-shin-enpitsu-it-stdn">
                春、濁り
              </p>
              <p className="string-md">Music Video</p>
              <p className="string-ss">
                Groggy-Froggy 1st mini album <br />
                「近い未来の話をしよう」収録曲
              </p>
              <div className="bg-[#00000077] flex text-white p-[10px] rounded-[50px]">
                <LinkButton />
              </div>
            </div>
          </div>
          <div className="flex-1 "></div>
        </figure>
      </section>

      <section
        className="w-full flex flex-col items-center py-[50px] space-y-[50px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImagesRoutes.livehotIMG})`,
          backgroundAttachment: "fixed",
        }}
      >
        <SectionTitle
          title="Music Video"
          subtitle="映像で音楽を体感しよう"
          color="1"
        />
        <MusicVideoList />
      </section>
      <FooterPhotos />
    </div>
  );
};

export default Home;
