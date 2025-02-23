import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-4 text-md-right text-center">
      <img style={{ maxHeight: '325px' }} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
