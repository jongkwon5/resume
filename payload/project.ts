import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Rainbow 통합 모니터링 솔루션 개발',
      startedAt: '25-06-01',
      endedAt: '',
      where: '(주)라인업코리아',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/d511179d-6106-4335-86c4-9be62c471da8',
        },
        {
          content: '메인 대시보드(1차 버전 구현)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: ' DB에 등록된 장비 목록 및 상태를 기반으로 현황 대시보드 1차 버전 구현',
            },
            {
              content:
                ' 향후 모니터링 지표(CPU, Memory, Disk 등) 확장을 고려한 유연한 화면 구조 설계',
            },
            {
              content:
                '장비 관리 페이지에서 등록/수정된 장비의 상태가 대시보드에 실시간으로 반영되는 기능 구현',
            },
          ],
        },
        {
          content: '장비 등록 관리(관리자 화면)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '모니터링 장비의 효율적인 등록 및 관리를 위한 UI/UX 설계 및 구현',
            },
            {
              content: '중복 등록 검증 및 입력값 유효성 검사(클라이언트/서버)로 데이터 품질 확보',
            },
            {
              content: '등록된 장비 정보가 대시보드에 즉시 반영되도록 DB 연동',
            },
          ],
        },
        {
          content: 'DB 스키마 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Device : 장비 식별자, IP, 상태, 생성/변경일 등 기본 정보 관리',
            },
            {
              content:
                'Processors : 향후 수집될 CPU 성능 데이터 및 장비 FK를 포함한 시계열 데이터 관리 구조 설계',
            },
          ],
        },
        {
          content: '백엔드 API 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '장비 정보 조회를 위한 REST API 엔드포인트 설계 (/devices 등)',
            },
            {
              content:
                'Spring AOP를 활용하여 트랜잭션 및 예외 처리 로직을 설계, 비즈니스 로직과 공통 기능을 분리하여 유지보수성 향상',
            },
          ],
        },
        {
          content: 'Git 컨벤션·배포 가이드 표준화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Git Commit 메시지 및 Branch 전략 등 Git 컨벤션 규칙을 수립·문서화',
            },
            {
              content:
                '시스템의 안정적 운영과 원활한 인수인계를 위한 설치·배포 가이드 작성 및 표준화',
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'MySQL',
            'JPA',
            'Docker',
            'Jenkins',
            'Git/Github',
            'GitLab',
            'intelliJ',
          ],
        },
      ],
    },
    {
      title: '국립 금오공과대학교 종합정보시스템 웹 개발',
      startedAt: '24-05-01',
      endedAt: '25-02-10',
      where: '(주)아카넷 서울지사',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/9cc6fd68-9432-4e88-9903-f4432c3dce59',
        },
        {
          content: '종합정보시스템 학사(수업) 및 강사료 관리 파트 풀스택 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: ' 총 85개 화면 신규 개발 (기존 55개 대비 52% 확장)',
            },
            {
              content:
                ' Spring Framework, Java, MyBatis를 활용한 백엔드 로직 및 Oracle 데이터베이스 연동 개발 담당',
            },
            {
              content:
                ' 학생 및 교직원의 사용 편의성을 고려한 UI/UX 설계 및 JavaScript, exBuilder6 기반의 화면 개발',
            },
          ],
        },
        {
          content: '사용자 요구사항 반영 및 시스템 기능 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '별도 피드백 사이트를 통해 40건 이상의 개선 요청 사항 수집 및 반영',
            },
            {
              content: '학생 시간표 조회 기능 개선',
              descriptions: [
                {
                  content:
                    '요일/시간대 필터 기능 신규 도입 → 조회 UI 개선 및 학생 사용 편의성 향상',
                },
              ],
            },
            {
              content: '강사료 계산 정확도 향상',
              descriptions: [
                {
                  content:
                    '강사 구분 및 시수 반영 오류 발생 → CASE문 및 서브쿼리 적용으로 계산 정확도 향상',
                },
              ],
            },
          ],
        },
        {
          content: '성능 최적화 및 효율적인 개발 프로세스 적용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '50만 건 이상의 강의평가결과 데이터를 처리하며 분석 속도 20% 단축 (10초 이상 → 7초 이내)',
              descriptions: [
                {
                  content: '기존 LEFT OUTER JOIN 방식으로 인해 조회 속도 저하 문제 발생',
                },
                {
                  content: 'WITH 절을 활용하여 사전 데이터 가공 후, 조회하도록 개선',
                },
                {
                  content:
                    '불필요한 반복 JOIN을 줄이고 단일 WITH 절에서 필요한 데이터만 추출하여 성능 최적화',
                },
              ],
            },
          ],
        },
        {
          content: '문서화 및 사용자 가이드 작성',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '신규 기능 개발 가이드 및 사용 메뉴얼 문서화',
              descriptions: [
                {
                  content:
                    '추후 유지보수를 고려하여 주요 기능의 설계 의도, 로직 흐름 등을 정리한 개발 문서 작성',
                },
                {
                  content:
                    '학생 및 교직원을 위한 사용자 메뉴얼 작성에 참여하여 실제 사용자 대상 기능 설명 자료 제공',
                },
              ],
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
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
        {
          content: 'https://onekit.kumoh.ac.kr',
          href: 'https://onekit.kumoh.ac.kr',
        },
      ],
    },

    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Hello Everyone' },
    //     {
    //       content: 'Launched Bar Service in 2018',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
    //         {
    //           content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
