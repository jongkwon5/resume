import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한국방송통신대학교 컴퓨터과학과',
      subTitle: '편입/재학중',
      startedAt: '2025-09-01',
    },
    {
      title: '건국대학교 교육대학원 교육학 석사 졸업',
      subTitle: '졸업 학점 (4.2 / 4.5)',
      startedAt: '20-03-01',
      endedAt: '22-08-22',
    },
    {
      title: '청운대학교 실용음악과 학사 졸업',
      subTitle: '졸업 학점 (3.49 / 4.5)',
      startedAt: '13-03-01',
      endedAt: '19-02-13',
    },
  ],
};
export default education;
