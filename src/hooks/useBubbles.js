import { useState, useEffect } from "react";

const useBubbles = (bubbleCount = 20) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generatedBubbles = [];

    for (let i = 0; i < bubbleCount; i++) {
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 3;

      generatedBubbles.push({ id: 1, left: randomLeft, delay: randomDelay });
    }
    setBubbles(generatedBubbles);
  }, [bubbleCount]);
  return bubbles;
};

export default useBubbles;
