import React, { useState, useEffect } from "react";

const Test = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const startPercent = 0;
  const endPercent = 100;
  /*
  useEffect(() => {
    // アニメーションの終了を監視
    const timer = setTimeout(() => {
      // 次のアニメーションを開始
      if (currentAnimation < 2) {
        setCurrentAnimation((prev) => prev + 1);
      }
    }, 2000); // 各アニメーションが 2 秒間隔で切り替わる

    return () => clearTimeout(timer); // クリーンアップ
  }, [currentAnimation]);
*/
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.parent-box`);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      const elementHeight = rect.height;

      const startOffset = (startPercent / 100) * elementHeight;
      const endOffset = (endPercent / 100) * elementHeight;

      const scrollProgress = Math.min(
        Math.max((scrollPosition - startOffset) / (endOffset - startOffset), 0),
        1
      );

      console.log(scrollProgress);
      if (0 <= scrollProgress && scrollProgress <= 0.3) {
        setCurrentAnimation(0);
      }
      if (0.3 <= scrollProgress && scrollProgress <= 0.6) {
        setCurrentAnimation(1);
      }
      if (0.6 <= scrollProgress && scrollProgress <= 0.9) {
        setCurrentAnimation(2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startPercent, endPercent]);

  return (
    <div>
      <section className="h-screen"></section>
      <div className="animation-container w-full h-screen parent-box">
        <div className={`box ${currentAnimation === 0 ? "animation-1" : ""}`} />
        <div className={`box ${currentAnimation === 1 ? "animation-2" : ""}`} />
        <div className={`box ${currentAnimation === 2 ? "animation-3" : ""}`} />
      </div>
      <section className="h-screen"></section>
    </div>
  );
};

export default Test;
