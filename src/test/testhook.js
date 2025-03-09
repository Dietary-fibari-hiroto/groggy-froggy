import { useState, useEffect } from "react";

/**
 * スクロールに応じて sticky 要素の opacity を制御するカスタムフック。
 *
 * @param {string} className - 対象となる要素のクラス名。
 * @param {number} [startPercent=0] - opacity の変化が開始するスクロール量（要素高さの%）。
 * @param {number} [endPercent=200] - opacity が 1 に達するスクロール量（要素高さの%）。
 * @returns {Object} - `style` オブジェクトを返し、コンポーネントに適用可能。
 *
 *   使用方法: const { style } = useStickyOpacity("sticky-target", 20, 50);
 */
const useTesthook = (
  className,
  targetClass,
  startPercent = 0,
  endPercent = 200,
  lastText = "酢"
) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 指定されたクラス名のエレメントを取得
      const element = document.querySelector(`.${className}`);

      const targetElement = document.querySelector(`.${targetClass}`);

      // 要素が存在しない場合は何もしない
      if (!element) return;

      // 要素の位置やサイズに関する情報を取得
      const rect = element.getBoundingClientRect();

      // 現在のページのY軸方向のスクロール量を取得
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // 要素の高さを取得
      const elementHeight = rect.height;

      // startPercent と endPercent を要素の高さの割合で変換
      const startOffset = (startPercent / 100) * elementHeight;
      const endOffset = (endPercent / 100) * elementHeight;

      // 要素内のスクロール位置の割合（%）を計算
      const scrollProgress = Math.min(
        Math.max((scrollPosition - startOffset) / (endOffset - startOffset), 0),
        1
      );
      targetElement.classList.add("size-[30px]");
      if (0 <= scrollProgress && scrollProgress <= 0.6)
        targetElement.classList.add("text-circle");
      targetElement.innerHTML = "<p>O</p>";
      if (0.6 <= scrollProgress && scrollProgress <= 0.7)
        targetElement.classList.remove("text-circle");
      targetElement.innerHTML = "<p>_</p>";
      if (0.7 <= scrollProgress && scrollProgress <= 1)
        targetElement.innerHTML = `<p>${lastText}</p>`;
      // 進行具合に応じて opacity を設定
      setOpacity(scrollProgress); // 0 ～ 1 の範囲に正規化
    };

    // スクロールイベントのリスナーを追加
    window.addEventListener("scroll", handleScroll);
    return () => {
      // クリーンアップ
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className, startPercent, endPercent]);
};

export default useTesthook;
