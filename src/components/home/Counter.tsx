import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = progress * target;
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

export default Counter;
