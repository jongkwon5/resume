import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)명화공업',
      positions: [
        {
          title: '디지털혁신팀 소프트웨어 개발자',
          startedAt: '2026-01',
          endedAt: '',
          descriptions: [
            {
              weight: 'MEDIUM',
              content: '전사 통합 비즈니스 PORTAL 구축 및 고도화',
              descriptions: [
                {
                  content: '11개 사업장(해외 포함) 대상 PORTAL 리뉴얼 기획 ~ 운영 단독 수행',
                },
                {
                  content:
                    'Java/Spring Boot 풀스택 개발, IIS 환경 배포 및 개발/운영 환경 DB 분리로 안정성 확보',
                },
                {
                  content:
                    'Gemini API + 로컬 LLM 연동 AI 분석, 자산/게시판 알림 자동화, Jenkins CI/CD 구축',
                },
                {
                  content:
                    'Python 스크립트 기반 BI 대시보드(240개) 자동 캡처 및 데이터 이관 파이프라인 구현',
                },
                {
                  content: 'ERD, 시스템 구성도, 매뉴얼 등 산출물 표준화, 사용자 만족도 93% 향상',
                },
              ],
            },
            {
              weight: 'MEDIUM',
              content: '설비 알람 관리 시스템 풀스택 개발',
              descriptions: [
                {
                  content: '3개 공장 설비 알람 실시간 통합 모니터링 시스템 구축',
                },
                {
                  content:
                    '9개 라인 57대 설비(FANUC/HMI·모드버스/PLC) 대상 실시간 데이터 수집 체계 구축, 3초 주기 알람/설비상태 수집',
                },
                {
                  content: 'DB 트리거 기반 실시간 알람/설비상태 변화 자동 캡처 로직 설계',
                },
                {
                  content:
                    '±5초 시차 매칭 문제를 사전 집계 테이블로 해결 — 매핑 651건 → 34,187건(52배)',
                },
                {
                  content: 'Python 배치 수집 파이프라인 구축으로 운영 개입 없는 데이터 최신성 유지',
                },
              ],
            },
            {
              weight: 'MEDIUM',
              content: '서버 이중화 및 인프라 운영 고도화',
              descriptions: [
                {
                  content: 'Windows 서비스 운영, 서버 5대 백업 자동화, 자산 DB 일원화',
                },
                {
                  content:
                    '서비스 자동 재시작 스케줄링 및 리소스 실시간 모니터링 자동화 파이프라인 구축',
                },
                {
                  content: '외부 협력사 접속용 NHN Cloud 서버 구축/운영',
                },
              ],
            },
          ],
          skillKeywords: [
            'Java',
            'JavaScript',
            'Python',
            'React',
            'Spring',
            'MSSQL',
            'MyBatis',
            'Tableau',
            'Jenkins',
            'Git/Github',
            'NHN Cloud',
            'Prometheus',
            'Grafana',
          ],
        },
      ],
    },
    {
      title: '(주)라인업코리아',
      positions: [
        {
          title: '솔루션개발팀 솔루션 개발자',
          startedAt: '2025-05',
          endedAt: '2026-01',
          descriptions: [
            {
              weight: 'MEDIUM',
              content: '서울기록원 디지털 아카이브 관리 시스템 고도화',
              descriptions: [
                {
                  content:
                    'CKEditor 업로드 구조 개선(Base64 → 파일서버 URL)으로 DB 용량 6,000배 절감, 업로드 속도 600배 향상',
                },
                {
                  content:
                    '대용량 엑셀 다운로드 최적화(XSSF → SXSSF)로 생성 시간 121초 → 19초(84% 단축), 메모리 사용량 66% 절감',
                },
                {
                  content:
                    'N+1 Query 제거 및 JOIN 단일 쿼리 구조 리팩토링으로 DB I/O 효율 대폭 개선',
                },
                {
                  content:
                    '전거 등록부 SQL 구조 단순화 및 다중 조인 병목 해소로 조회 속도 21초 → 0.7초(97% 단축)',
                },
                {
                  content: '시스템 전반의 데이터 처리 안정성 및 대용량 환경 대응력 강화',
                },
              ],
            },
            {
              weight: 'MEDIUM',
              content: 'Rainbow 통합 모니터링 솔루션 개발',
              descriptions: [
                {
                  content:
                    'DB 기반 장비 현황 모니터링 대시보드 개발 및 SSE 기반 실시간 지표 반영 구조 구현',
                },
                {
                  content:
                    'Spring AOP 기반 API 호출 로깅 및 메서드 실행시간 측정 자동화, 공통 로직 분리로 유지보수성 향상',
                },
                {
                  content: 'Swagger를 활용한 API 문서화 및 테스트 환경 구축',
                },
                {
                  content: 'Git 컨벤션 정립 및 문서화, 설치/배포 가이드 작성',
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
      title: '(주)아카넷',
      positions: [
        {
          title: '정보화사업본부 웹 개발자',
          startedAt: '2023-12',
          endedAt: '2025-02',
          descriptions: [
            {
              weight: 'MEDIUM',
              content:
                '자사 솔루션 기반 대학정보화 업무 프로세스 통합 및 차세대 대학 종합정보시스템 구축/개발',
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
