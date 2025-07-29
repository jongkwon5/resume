import { CSSProperties, PropsWithChildren, useEffect, useState } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  const [maxHeight, setMaxHeight] = useState('325px');

  useEffect(() => {
    const updateHeight = () => {
      setMaxHeight(window.innerWidth <= 766 ? '240px' : '325px');
    };
    updateHeight(); // 최초 실행
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const style: CSSProperties = {
    maxHeight,
  };

  return (
    <div className="pb-4 text-md-right text-center">
      <img style={style} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
