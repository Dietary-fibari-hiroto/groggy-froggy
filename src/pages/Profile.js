import ImagesRoutes from "../assets/ImagesRoutes";

const Profile = () => {
  return (
    <div className="leading-[40px] text-start">
      <section
        className="section-frame section-bg-setting flex items-center justify-evenly"
        style={{ backgroundImage: `url(${ImagesRoutes.IMG_4677})` }}
      >
        <p className="text-white text-[100px] uddigikyokasho-pro ">Story</p>
        <img className="w-[500px]" src={ImagesRoutes.longlog_w} alt="" />
      </section>
      <section className="text-white uddigikyokasho-pro p-[100px] flex justify-evenly items-center max-lg:flex-col">
        <img className="flex-1 w-[500px]" src={ImagesRoutes.IMG_2896} alt="" />
        <div className="flex-1 space-y-[100px]">
          <img
            className="h-[80px] px-[100px]"
            src={ImagesRoutes.longlog_w}
            alt=""
          />
          <p className="px-[100px]   string-sss">
            Groggy-Froggy（ぐろっきーふろっぎー）は、大阪を拠点に活動する3ピースの歌モノロックバンドです。メンバーは、ボーカル・ギターのまさ、ベースの
            みちや、ドラムのちひろで構成されています。
            個性豊かなメンバーが織りなす独特のサウンドと雰囲気で注目を集めている。その名前が示す通り、どこか気だるさを感じさせつつも、聴く人を明るい気分にさせる音楽が特徴。ジャンルの枠を越えた多彩なスタイルで、リスナーに新しい体験を提供している。
          </p>
        </div>
      </section>

      <section className="text-white uddigikyokasho-pro p-[100px] flex justify-between items-center">
        <div className="flex-1 space-y-[50px]">
          <p className="string-s px-[100px]">揺るがない愛のある音楽を。</p>
          <p className="string-sss px-[100px]">
            グルーヴィーなベースラインと軽快なドラムに乗せて、キャッチーなメロディーと深みのある歌詞が展開され、ポップやロックをベースにしつつ、ジャズやファンク、エレクトロの要素を大胆に取り入れ、リスナーの耳に鮮やかな印象を残している。
            時間や状況に左右されない暖かい音楽を、
            彼らは「揺るがない愛のある音楽を。」をコンセプトに掲げ、独自のサウンドを展開している。
          </p>
        </div>
        <img className="flex-1 w-1/2" src={ImagesRoutes.IMG_2983} alt="" />
      </section>
      <section></section>
    </div>
  );
};
export default Profile;
