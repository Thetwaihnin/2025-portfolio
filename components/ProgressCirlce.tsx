import { useState, useEffect } from "react";

type Props = {
  percentage: number;
  label: string;
  name: string;
};

const NeonProgressCircle = ({ percentage, label,name }: Props) => {
  const [progress, setProgress] = useState(0);
  const dashOffset = 100 - progress;

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timeout);
  }, [percentage]);

  
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-lg mb-2 text-white font-obitron">
        {name}
      </span>
      <svg className="md:w-24 md:h-24 w-16 h-16 transform progress-svg -rotate-90" viewBox="0 0 36 36">
        <defs>
          {/* Neon Glow Filter */}
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feFlood floodColor="#00ffff" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Circle */}
        <path
          className="text-cyan-50"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />

        <path
          className="transition-all duration-1500"
          strokeWidth={3}
          strokeDasharray="100"
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          stroke="#00ffff"
          fill="none"
          filter="url(#neon-glow)"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <span className="text-xl text-white font-obitron font-bold mt-2">
        {label}
      </span>
    </div>
  );
};

export default NeonProgressCircle;
