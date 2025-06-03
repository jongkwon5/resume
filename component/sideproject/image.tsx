import { PropsWithChildren, CSSProperties } from 'react';

const imgStyle: CSSProperties = {
  maxHeight: '320px',
  maxWidth: '100px',
  minWidth: '100px',
  textAlign: 'center',
};

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-right text-center">
      <img style={imgStyle} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
