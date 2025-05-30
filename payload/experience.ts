import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)라인업코리아',
      positions: [
        {
          title: '솔루션연구소 개발자',
          startedAt: '2025-05',
          endedAt: '',
          descriptions: ['자사 솔루션 구축/개발'],
          skillKeywords: [
            'JAVA',
            'JavaScript',
            'Spring',
            'Oracle',
            'MongoDB',
            'MyBatis',
            'JPA',
            'Jenkins',
            'Git',
            'GitLab',
          ],
        },
      ],
    },
    {
      title: '(주)아카넷 서울지사',
      positions: [
        {
          title: '정보화사업본부 웹 개발자',
          startedAt: '2023-12',
          endedAt: '2025-02',
          descriptions: [
            '자사 솔루션 기반 대학정보화 업무 프로세스 통합(SI) 및 차세대 대학 종합정보시스템 구축/개발',
            '국립 금오공과대학교 종합정보시스템(학사 · 강사료 관리) 파트 풀스택 개발 담당',
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
  ],
};

export default experience;
