import React, { useState, useEffect } from 'react';

interface StudentAvatarProps {
  photoUrl?: string;
  nameGu: string;
  gender: 'male' | 'female';
  avatarIcon?: string;
  avatarBg?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export const StudentAvatar: React.FC<StudentAvatarProps> = ({
  photoUrl,
  nameGu,
  gender,
  avatarIcon = 'boy1',
  avatarBg = '#e0f2fe',
  size = 'lg',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  // Reset image error if photoUrl updates
  useEffect(() => {
    setImageError(false);
  }, [photoUrl]);

  const sizeClasses = {
    xs: 'w-7 h-7 text-xs rounded-full',
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-24 h-24 text-2xl',
    xl: 'w-32 h-32 text-3xl',
    '2xl': 'w-40 h-40 text-4xl',
  };

  // If user uploaded a valid photo
  if (photoUrl && !imageError) {
    return (
      <div
        className={`relative overflow-hidden shrink-0 shadow-sm border border-slate-200/80 bg-slate-100 flex items-center justify-center ${
          size === 'xs' ? 'rounded-full' : 'rounded-2xl'
        } ${sizeClasses[size]} ${className}`}
      >
        <img
          src={photoUrl}
          alt={nameGu}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Built-in Indian primary school student SVGs
  const isGirl = gender === 'female' || avatarIcon.startsWith('girl');

  return (
    <div
      style={{ backgroundColor: avatarBg }}
      className={`relative rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-200/80 flex items-center justify-center transition-transform ${sizeClasses[size]} ${className}`}
      aria-label={nameGu}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background glow */}
        <circle cx="50" cy="50" r="46" fill="white" fillOpacity="0.45" />

        {/* School Uniform Collar */}
        <path
          d="M26 88 C26 74, 38 68, 50 68 C62 68, 74 74, 74 88 L74 96 L26 96 Z"
          fill={isGirl ? '#0284c7' : '#0369a1'} // School blue uniform
        />
        {/* White shirt collar triangles */}
        <polygon points="50,74 38,68 45,82" fill="#ffffff" />
        <polygon points="50,74 62,68 55,82" fill="#ffffff" />
        {/* School tie or badge */}
        <polygon points="48,74 52,74 51,84 49,84" fill="#e11d48" />

        {/* Neck */}
        <rect x="44" y="58" width="12" height="14" rx="4" fill="#fbcfe8" />

        {/* Hair - Back (for girls with pigtails) */}
        {isGirl && (
          <>
            {/* Left ponytail/ribbon */}
            <circle cx="22" cy="46" r="10" fill="#1e293b" />
            <circle cx="26" cy="44" r="4" fill="#ef4444" /> {/* red hair ribbon */}
            {/* Right ponytail/ribbon */}
            <circle cx="78" cy="46" r="10" fill="#1e293b" />
            <circle cx="74" cy="44" r="4" fill="#ef4444" />
          </>
        )}

        {/* Face */}
        <ellipse cx="50" cy="46" rx="20" ry="21" fill="#fed7aa" />

        {/* Cheeks */}
        <ellipse cx="37" cy="50" rx="3.5" ry="2.5" fill="#fca5a5" opacity="0.6" />
        <ellipse cx="63" cy="50" rx="3.5" ry="2.5" fill="#fca5a5" opacity="0.6" />

        {/* Eyes */}
        <ellipse cx="42" cy="44" rx="2.5" ry="3.2" fill="#1e293b" />
        <circle cx="43" cy="43" r="1" fill="#ffffff" />
        <ellipse cx="58" cy="44" rx="2.5" ry="3.2" fill="#1e293b" />
        <circle cx="59" cy="43" r="1" fill="#ffffff" />

        {/* Eyebrows */}
        <path d="M38 39 Q42 37 46 39" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M54 39 Q58 37 62 39" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" />

        {/* Nose */}
        <circle cx="50" cy="48" r="1.3" fill="#fb923c" />

        {/* Big Happy Smile */}
        <path
          d="M43 53 Q50 61 57 53"
          stroke="#991b1b"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Hair - Front */}
        {isGirl ? (
          <path
            d="M30 40 C30 26, 42 22, 50 22 C58 22, 70 26, 70 40 C68 34, 60 30, 50 30 C40 30, 32 34, 30 40 Z"
            fill="#1e293b"
          />
        ) : (
          <path
            d="M29 42 C28 27, 40 21, 50 21 C60 21, 72 27, 71 42 C66 32, 58 30, 48 30 C38 30, 32 35, 29 42 Z"
            fill="#1e293b"
          />
        )}

        {/* Gujarati Tika / Bindi (traditional touch) */}
        {isGirl ? (
          <circle cx="50" cy="40" r="1.5" fill="#dc2626" />
        ) : (
          <line x1="49" y1="36" x2="51" y2="36" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
};
