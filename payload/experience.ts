import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)아카넷 서울지사',
      positions: [
        {
          title: '웹 개발자',
          startedAt: '2023-12',
          descriptions: [
            '국립금오공과대학교 종합정보시스템 웹 개발',
            '대학정보화 업무 프로세스 통합(SI) 및 패키지 기반 시스템 구축',
            '(Front-End / Back-End) 풀스택 개발',
          ],
          skillKeywords: ['JAVA', 'JavaScript', 'Spring', 'Nexacro', 'Oracle', 'MyBatis', 'SVN'],
        },
      ],
    },
    {
      title: '중앙정보처리학원원',
      positions: [
        {
          title: 'JAVA 기반 풀스택 개발자 취업 과정',
          startedAt: '2023-02',
          endedAt: '2023-09',
          descriptions: [],
        },
      ],
    },
  ],
};

export default experience;
