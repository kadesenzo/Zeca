
import React from 'react';

interface WavySectionProps {
  color?: string;
  flip?: boolean;
}

export const WavySection: React.FC<WavySectionProps> = ({ color = "rgba(52, 199, 89, 0.1)", flip = false }) => {
  return (
    <div className={`relative w-full h-40 overflow-hidden ${flip ? '-mt-40 rotate-180' : '-mb-40 z-0'}`}>
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,250.7C840,235,960,181,1080,181.3C1200,181,1320,235,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
        <path
          fill={color}
          opacity="0.4"
          d="M0,64L60,106.7C120,149,240,235,360,240C480,245,600,171,720,149.3C840,128,960,160,1080,186.7C1200,213,1320,235,1380,218.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
};
