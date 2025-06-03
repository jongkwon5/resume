import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile_2.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume - Jongkwon Park';
const description = '차곡차곡 쌓아온 경험과 성장의 기록 - by Jongkwon Park';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Wonjoon',
        lastName: 'Lee',
        username: '월리',
        gender: 'Male',
      },
    },
  },
};
