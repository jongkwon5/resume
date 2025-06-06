import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { ICertification } from './ICertification';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ICertification.Payload;

export const Certification = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="CERTIFICATION">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
