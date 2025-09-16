import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)라인업코리아',
      positions: [
        {
          title: '솔루션개발팀 웹 개발자',
          startedAt: '2025-05',
          endedAt: '',
          descriptions: [
            {
              weight: 'MEDIUM',
              content: 'Rainbow 통합 모니터링 솔루션 개발',
              descriptions: [
                {
                  content:
                    'DB 기반 장비 현황 모니터링 개발, SSE 적용으로 실시간 반영 및 직관적 시각화 제공',
                },
                {
                  content:
                    '중복 검증 및 유효성 검사(클라이언트·서버) 적용, 등록 즉시 대시보드 반영되는 관리자 화면 구현',
                },
                {
                  content:
                    'Device, Processors 등 모니터링 지표 확장을 고려한 시계열 데이터 관리 구조 설계',
                },
                {
                  content:
                    'API 호출 로깅 및 실행 시간 측정 자동화, 공통 로직 분리로 유지보수 및 성능 개선',
                },
                {
                  content:
                    'Git 컨벤션 정립 및 문서화, Jenkins·Docker 기반 배포 프로세스 준수, 설치·배포 가이드 작성',
                },
              ],
            },
            {
              weight: 'MEDIUM',
              content: '서울기록원 아카이브 관리 시스템 기능 개선 및 유지 보수',
              descriptions: [
                {
                  content:
                    '기존 검색 엔진의 조건 불일치·재검색 불가·필터 충돌 문제 해결, Query/ReQuery 누적 관리 및 충돌 방지 로직 설계',
                },
                {
                  content:
                    '상세/목록 건수 불일치 문제를 API 동기화 구조로 개선, 실시간 TotalCount API 구현으로 정합성 100% 보장',
                },
                {
                  content:
                    'SessionStorage + VO 기반 상태 관리 구조 도입, 최초 검색과 재검색을 명확히 분리해 조건 충돌 제거 및 탐색 안정성 확보',
                },
              ],
            },
          ],
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'MySQL',
            'JPA',
            'MyBatis',
            'Docker',
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
