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
          descriptions: [
            {
              weight: 'MEDIUM',
              content: '자사 솔루션 구축/개발',
            },
          ],
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'Oracle',
            'MongoDB',
            'JPA',
            'MyBatis',
            'Jenkins',
            'Git/Github',
            'GitLab',
            'IntelliJ',
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
            {
              weight: 'MEDIUM',
              content:
                '자사 솔루션 기반 대학정보화 업무 프로세스 통합(SI) 및 차세대 대학 종합정보시스템 구축/개발',
            },
            {
              weight: 'MEDIUM',
              content:
                '국립 금오공과대학교 종합정보시스템(학사 · 강사료 관리) 파트 풀스택 개발 담당',
              descriptions: [
                {
                  content:
                    'Java, Spring, JavaScript, Oracle, MyBatis 기반 85개 화면 신규 개발 (기존 대비 52% 확장)',
                },
                {
                  content:
                    '50만 건 이상의 대용량 데이터를 처리하는 Oracle DB 기반 SQL 튜닝, 복잡한 JOIN 구조를 WITH절 기반으로 재구성하여 쿼리 성능 20% 이상 개선 (10초 이상 → 7초 이내)',
                },
                {
                  content: '실사용자 피드백 40건 이상 분석 · 반영, UI/UX 및 기능 개선 수행',
                },
                {
                  content: 'SVN 기반 협업 및 형상관리, 코드 리뷰 및 버전 관리 경험',
                },
                {
                  content: '개발 로직 및 테스트 시나리오 문서화, GUI 사용자 메뉴얼 작성 · 배포',
                },
              ],
            },
          ],
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'Oracle',
            'MyBatis',
            'exBuilder6',
            'SVN',
            'Eclipse',
          ],
        },
      ],
    },
  ],
};

export default experience;
