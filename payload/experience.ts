import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)아카넷 서울지사',
      positions: [
        {
          title: '정보화사업본부 웹 개발자',
          startedAt: '2023-12',
          endedAt: '2025-02',
          descriptions: [
            '대학정보화 업무 프로세스 통합(SI) 및 차세대 통합정보시스템 구축',
            '국립 금오공과대학교 종합정보시스템 웹 개발',
            '종합정보시스템 학사(수업) 및 강사료 관리 파트 풀스택 개발',
          ],
          skillKeywords: [
            'JAVA',
            'JavaScript',
            'Spring',
            'Oracle',
            'MyBatis',
            'exBuilder6',
            'Eclipse',
            'SVN',
          ],
        },
      ],
    },
    {
      title: '중앙정보처리학원',
      positions: [
        {
          title: 'JAVA 기반 풀스택 개발자 훈련 과정',
          startedAt: '2023-02',
          endedAt: '2023-09',
          descriptions: [],
        },
      ],
    },
  ],
};

export default experience;
