import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

export default StatCounter;